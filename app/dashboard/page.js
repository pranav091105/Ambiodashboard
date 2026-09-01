"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function DashboardPage() {
  const router = useRouter();

  const [business, setBusiness] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const supabase = createClient();

    // Get currently logged-in user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // If user is not logged in
    if (!user) {
      router.push("/login");
      return;
    }

    // Get the user's business
    const { data: businessData, error: businessError } = await supabase
      .from("businesses")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (businessError) {
      console.error(businessError);
      setLoading(false);
      return;
    }

    setBusiness(businessData);

    // Get appointments for this business
    const { data: appointmentData, error: appointmentError } =
      await supabase
        .from("appointments")
        .select("*")
        .eq("business_id", businessData.id)
        .order("appointment_date");

    if (appointmentError) {
      console.error(appointmentError);
    }

    setAppointments(appointmentData || []);

    setLoading(false);
  };

  const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/login");
  };

  if (loading) {
    return <h1>Loading dashboard...</h1>;
  }

  return (
    <main style={{ padding: "40px" }}>

      <h1>
        Welcome, {business?.name}
      </h1>

      <button onClick={handleLogout}>
        Logout
      </button>

      <hr />

      <h2>Appointments</h2>

      <p>
        Total Appointments: {appointments.length}
      </p>

      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <div>
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginTop: "10px",
              }}
            >
              <h3>{appointment.customer_name}</h3>

              <p>
                Service: {appointment.service_name}
              </p>

              <p>
                Date: {appointment.appointment_date}
              </p>

              <p>
                Time: {appointment.start_time}
              </p>

              <p>
                Staff: {appointment.staff_name}
              </p>
            </div>
          ))}
        </div>
      )}

    </main>
  );
}