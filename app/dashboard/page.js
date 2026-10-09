"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function DashboardPage() {
  const router = useRouter();

  const [business, setBusiness] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const supabase = createClient();

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      if (!user) {
        router.push("/login");
        return;
      }

      // Get salon/business
      const { data: businessData, error: businessError } =
        await supabase
          .from("businesses")
          .select("*")
          .eq("user_id", user.id)
          .single();

      if (businessError) {
        throw businessError;
      }

      setBusiness(businessData);

      // Get appointments
      const { data: appointmentData, error: appointmentError } =
        await supabase
          .from("appointments")
          .select("*")
          .eq("business_id", businessData.id)
          .order("appointment_date", { ascending: true })
          .order("start_time", { ascending: true });

      if (appointmentError) {
        throw appointmentError;
      }

      setAppointments(appointmentData || []);
    } catch (err) {
      console.error("Dashboard error:", err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/login");
  }

  const today = new Date();

  const todayString = today.toISOString().split("T")[0];

  const todayAppointments = useMemo(() => {
    return appointments.filter(
      (appointment) => appointment.appointment_date === todayString
    );
  }, [appointments, todayString]);

  const upcomingAppointments = useMemo(() => {
    return appointments
      .filter((appointment) => appointment.appointment_date >= todayString)
      .slice(0, 6);
  }, [appointments, todayString]);

  const weekAppointments = useMemo(() => {
    const sevenDays = new Date(today);
    sevenDays.setDate(today.getDate() + 7);

    return appointments.filter((appointment) => {
      const appointmentDate = new Date(
        appointment.appointment_date + "T00:00:00"
      );

      return (
        appointmentDate >= new Date(todayString + "T00:00:00") &&
        appointmentDate < sevenDays
      );
    });
  }, [appointments, todayString]);

  function formatDate(dateString) {
    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }

  function formatTime(time) {
    if (!time) return "";

    const [hours, minutes] = time.split(":");

    const date = new Date();

    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  function getStatusClass(status) {
    if (status === "confirmed") return "status-confirmed";
    if (status === "cancelled") return "status-cancelled";
    if (status === "completed") return "status-completed";

    return "status-scheduled";
  }

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="dashboard-loader"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <h2>Unable to load dashboard</h2>
        <p>{error}</p>

        <button onClick={() => window.location.reload()}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard-shell">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        <div className="dashboard-brand">
          <div className="dashboard-logo">✦</div>
          <span>Ambio</span>
        </div>

        <nav className="dashboard-nav">

          <a
            href="/dashboard"
            className="dashboard-nav-item active"
          >
            <span>⌂</span>
            Dashboard
          </a>

          <a
            href="/calendar"
            className="dashboard-nav-item"
          >
            <span>□</span>
            Calendar
          </a>

          <a
            href="#"
            className="dashboard-nav-item"
          >
            <span>◉</span>
            AI Receptionist
          </a>

          <a
            href="#"
            className="dashboard-nav-item"
          >
            <span>♙</span>
            Customers
          </a>

          <a
            href="#"
            className="dashboard-nav-item"
          >
            <span>⚙</span>
            Settings
          </a>

        </nav>

        <div className="dashboard-sidebar-bottom">

          <div className="sidebar-business">
            <div className="sidebar-business-avatar">
              {business?.name?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <strong>{business?.name}</strong>
              <small>{business?.email}</small>
            </div>
          </div>

          <button
            className="dashboard-logout"
            onClick={handleLogout}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* TOP BAR */}
        <header className="dashboard-header">

          <div>
            <span className="dashboard-page-label">
              Dashboard
            </span>

            <h1>
              Good morning, {business?.name?.split(" ")[0]} 👋
            </h1>

            <p>
              Here's what's happening at your salon today.
            </p>
          </div>

          <div className="dashboard-header-right">

            <button className="notification-button">
              🔔
              <span></span>
            </button>

            <div className="header-avatar">
              {business?.name?.charAt(0)?.toUpperCase()}
            </div>

          </div>

        </header>

        {/* STAT CARDS */}
        <section className="dashboard-stats">

          <div className="stat-card">

            <div className="stat-card-top">
              <span>Today's bookings</span>

              <div className="stat-icon">
                📅
              </div>
            </div>

            <strong>{todayAppointments.length}</strong>

            <small>
              Appointments today
            </small>

          </div>

          <div className="stat-card">

            <div className="stat-card-top">
              <span>Upcoming</span>

              <div className="stat-icon">
                🕐
              </div>
            </div>

            <strong>{upcomingAppointments.length}</strong>

            <small>
              Next appointments
            </small>

          </div>

          <div className="stat-card">

            <div className="stat-card-top">
              <span>This week</span>

              <div className="stat-icon">
                📊
              </div>
            </div>

            <strong>{weekAppointments.length}</strong>

            <small>
              Bookings this week
            </small>

          </div>

          <div className="stat-card">

            <div className="stat-card-top">
              <span>Total bookings</span>

              <div className="stat-icon">
                ✦
              </div>
            </div>

            <strong>{appointments.length}</strong>

            <small>
              All appointments
            </small>

          </div>

        </section>

        {/* CONTENT GRID */}
        <section className="dashboard-content-grid">

          {/* TODAY */}
          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>Today's appointments</h2>
                <p>
                  {todayAppointments.length} appointments scheduled
                </p>
              </div>

              <a href="/calendar">
                View calendar →
              </a>

            </div>

            {todayAppointments.length === 0 ? (

              <div className="empty-dashboard">

                <div className="empty-icon">
                  📅
                </div>

                <h3>No appointments today</h3>

                <p>
                  Your AI receptionist will add new bookings here.
                </p>

              </div>

            ) : (

              <div className="appointment-list">

                {todayAppointments.map((appointment) => (

                  <div
                    className="appointment-row"
                    key={appointment.id}
                  >

                    <div className="appointment-time">
                      <strong>
                        {formatTime(appointment.start_time)}
                      </strong>

                      <small>
                        {formatTime(appointment.end_time)}
                      </small>
                    </div>

                    <div className="appointment-person">

                      <div className="customer-avatar">
                        {appointment.customer_name
                          ?.charAt(0)
                          ?.toUpperCase()}
                      </div>

                      <div>
                        <strong>
                          {appointment.customer_name}
                        </strong>

                        <small>
                          {appointment.customer_phone}
                        </small>
                      </div>

                    </div>

                    <div className="appointment-service">

                      <strong>
                        {appointment.service_name || "Service"}
                      </strong>

                      <small>
                        {appointment.staff_name
                          ? `with ${appointment.staff_name}`
                          : "Salon appointment"}
                      </small>

                    </div>

                    <span
                      className={`appointment-status ${getStatusClass(
                        appointment.status
                      )}`}
                    >
                      {appointment.status || "scheduled"}
                    </span>

                  </div>

                ))}

              </div>

            )}

          </div>

          {/* UPCOMING */}
          <div className="dashboard-panel upcoming-panel">

            <div className="panel-header">

              <div>
                <h2>Upcoming</h2>
                <p>Next appointments</p>
              </div>

              <a href="/calendar">
                View all
              </a>

            </div>

            <div className="upcoming-list">

              {upcomingAppointments.length === 0 ? (

                <div className="empty-dashboard small-empty">

                  <div className="empty-icon">
                    ✦
                  </div>

                  <p>No upcoming appointments.</p>

                </div>

              ) : (

                upcomingAppointments.map((appointment) => (

                  <div
                    className="upcoming-item"
                    key={appointment.id}
                  >

                    <div className="upcoming-date">

                      <strong>
                        {new Date(
                          appointment.appointment_date +
                            "T00:00:00"
                        ).getDate()}
                      </strong>

                      <span>
                        {new Date(
                          appointment.appointment_date +
                            "T00:00:00"
                        ).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </span>

                    </div>

                    <div className="upcoming-info">

                      <strong>
                        {appointment.customer_name}
                      </strong>

                      <span>
                        {formatTime(appointment.start_time)} ·{" "}
                        {appointment.service_name || "Appointment"}
                      </span>

                    </div>

                    <div className="upcoming-arrow">
                      →
                    </div>

                  </div>

                ))

              )}

            </div>

          </div>

        </section>

        {/* AI RECEPTIONIST CARD */}
        <section className="ai-dashboard-card">

          <div className="ai-dashboard-icon">
            ✦
          </div>

          <div className="ai-dashboard-text">

            <span>AMBIO AI RECEPTIONIST</span>

            <h2>
              Your receptionist is working 24/7.
            </h2>

            <p>
              Calls are automatically handled and appointments
              are added to your salon calendar.
            </p>

          </div>

          <div className="ai-dashboard-status">
            <span></span>
            AI receptionist active
          </div>

        </section>

      </main>

    </div>
  );
}