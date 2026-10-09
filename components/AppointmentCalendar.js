"use client";

import { useMemo } from "react";

export default function AppointmentCalendar({
  currentDate,
  appointments,
  onDateClick,
  onAppointmentClick,
}) {
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const firstWeekday = firstDay.getDay();

    const days = [];

    for (let i = 0; i < firstWeekday; i++) {
      const date = new Date(year, month, -i);

      days.unshift({
        date,
        currentMonth: false,
      });
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push({
        date: new Date(year, month, day),
        currentMonth: true,
      });
    }

    while (days.length < 42) {
      const lastDate = days[days.length - 1].date;

      const date = new Date(lastDate);
      date.setDate(date.getDate() + 1);

      days.push({
        date,
        currentMonth: false,
      });
    }

    return days;
  }, [currentDate]);

  function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function getAppointments(date) {
    const key = dateKey(date);

    return appointments.filter(
      (appointment) => appointment.appointment_date === key
    );
  }

  function isToday(date) {
    const today = new Date();

    return (
      today.getFullYear() === date.getFullYear() &&
      today.getMonth() === date.getMonth() &&
      today.getDate() === date.getDate()
    );
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

  return (
    <div className="calendar-container">

      <div className="calendar-weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="calendar-grid">

        {calendarDays.map(({ date, currentMonth }) => {
          const dayAppointments = getAppointments(date);

          return (
            <div
              key={dateKey(date)}
              className={`calendar-day ${
                currentMonth ? "" : "calendar-day-other-month"
              }`}
              onClick={() => onDateClick(date)}
            >

              <div className="calendar-day-header">

                <span
                  className={`calendar-day-number ${
                    isToday(date) ? "calendar-today" : ""
                  }`}
                >
                  {date.getDate()}
                </span>

                {dayAppointments.length > 0 && (
                  <span className="calendar-count">
                    {dayAppointments.length}
                  </span>
                )}

              </div>

              <div className="calendar-appointments">

                {dayAppointments.slice(0, 3).map((appointment) => (

                  <button
                    key={appointment.id}
                    type="button"
                    className={`calendar-appointment ${
                      appointment.status === "cancelled"
                        ? "calendar-appointment-cancelled"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onAppointmentClick(appointment);
                    }}
                  >

                    <span className="calendar-appointment-time">
                      {formatTime(appointment.start_time)}
                    </span>

                    <span className="calendar-appointment-name">
                      {appointment.customer_name}
                    </span>

                  </button>

                ))}

                {dayAppointments.length > 3 && (
                  <span className="calendar-more">
                    +{dayAppointments.length - 3} more
                  </span>
                )}

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}