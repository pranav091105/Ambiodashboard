"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";
import AppointmentCalendar from "../../components/AppointmentCalendar";
import AppointmentModal from "../../components/AppointmentModal";

export default function CalendarPage() {
  const router = useRouter();

  const [business, setBusiness] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const [currentDate, setCurrentDate] = useState(new Date());

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    loadCalendar();
  }, []);

  async function loadCalendar() {
    try {
      const supabase = createClient();

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw userError;

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: businessData, error: businessError } =
        await supabase
          .from("businesses")
          .select("*")
          .eq("user_id", user.id)
          .single();

      if (businessError) throw businessError;

      setBusiness(businessData);

      const {
        data: appointmentData,
        error: appointmentError,
      } = await supabase
        .from("appointments")
        .select("*")
        .eq("business_id", businessData.id)
        .order("appointment_date", { ascending: true })
        .order("start_time", { ascending: true });

      if (appointmentError) throw appointmentError;

      setAppointments(appointmentData || []);
    } catch (err) {
      console.error("Calendar error:", err);
      setError(err.message || "Unable to load calendar.");
    } finally {
      setLoading(false);
    }
  }

  function previousMonth() {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  }

  function nextMonth() {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  }

  function goToToday() {
    setCurrentDate(new Date());
  }

  function formatDateForInput(date) {
    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function handleDateClick(date) {
    setSelectedAppointment(null);
    setSelectedDate(formatDateForInput(date));
    setModalOpen(true);
  }

  function handleAppointmentClick(appointment) {
    setSelectedAppointment(appointment);
    setSelectedDate(appointment.appointment_date);
    setModalOpen(true);
  }

  async function handleCreateAppointment(formData) {
    if (!business) return;

    setSaving(true);
    setError("");

    try {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("appointments")
        .insert([
          {
            business_id: business.id,
            customer_name: formData.customer_name,
            customer_phone: formData.customer_phone,
            service_name: formData.service_name,
            staff_name: formData.staff_name || null,
            appointment_date: formData.appointment_date,
            start_time: formData.start_time,
            end_time: formData.end_time,
            status: formData.status || "scheduled",
            notes: formData.notes || null,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      setAppointments((previous) =>
        [...previous, data].sort((a, b) => {
          const first =
            `${a.appointment_date} ${a.start_time}`;

          const second =
            `${b.appointment_date} ${b.start_time}`;

          return first.localeCompare(second);
        })
      );

      setModalOpen(false);
    } catch (err) {
      console.error("Create appointment error:", err);
      setError(err.message || "Unable to create appointment.");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/login");
  }

  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="dashboard-loader"></div>
        <p>Loading your calendar...</p>
      </div>
    );
  }

  if (error && !business) {
    return (
      <div className="dashboard-error">
        <h2>Unable to load calendar</h2>
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
            className="dashboard-nav-item"
          >
            <span>⌂</span>
            Dashboard
          </a>

          <a
            href="/calendar"
            className="dashboard-nav-item active"
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

      {/* MAIN */}

      <main className="dashboard-main">

        <header className="calendar-page-header">

          <div>
            <span className="dashboard-page-label">
              SCHEDULE
            </span>

            <h1>Calendar</h1>

            <p>
              Manage your salon appointments and schedule.
            </p>
          </div>

          <button
            className="new-appointment-button"
            onClick={() => {
              setSelectedAppointment(null);
              setSelectedDate(formatDateForInput(new Date()));
              setModalOpen(true);
            }}
          >
            <span>+</span>
            New appointment
          </button>

        </header>

        {error && (
          <div className="calendar-error">
            {error}
          </div>
        )}

        <section className="calendar-panel">

          {/* CALENDAR TOOLBAR */}

          <div className="calendar-toolbar">

            <div className="calendar-toolbar-left">

              <button
                className="calendar-nav-button"
                onClick={previousMonth}
              >
                ←
              </button>

              <button
                className="calendar-today-button"
                onClick={goToToday}
              >
                Today
              </button>

              <button
                className="calendar-nav-button"
                onClick={nextMonth}
              >
                →
              </button>

            </div>

            <h2>{monthName}</h2>

            <div className="calendar-view-label">
              Month
            </div>

          </div>

          <AppointmentCalendar
            currentDate={currentDate}
            appointments={appointments}
            onDateClick={handleDateClick}
            onAppointmentClick={handleAppointmentClick}
          />

        </section>

        {/* LEGEND */}

        <div className="calendar-footer-info">

          <div>
            <span className="legend-dot scheduled"></span>
            Scheduled
          </div>

          <div>
            <span className="legend-dot confirmed"></span>
            Confirmed
          </div>

          <div>
            <span className="legend-dot completed"></span>
            Completed
          </div>

          <div>
            <span className="legend-dot cancelled"></span>
            Cancelled
          </div>

          <span className="calendar-appointment-count">
            {appointments.length} total appointments
          </span>

        </div>

      </main>

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => {
          if (!saving) {
            setModalOpen(false);
            setSelectedAppointment(null);
          }
        }}
        onSave={handleCreateAppointment}
        appointment={selectedAppointment}
        selectedDate={selectedDate}
        saving={saving}
      />

    </div>
  );
}