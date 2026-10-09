"use client";

import { useEffect, useState } from "react";

export default function AppointmentModal({
  isOpen,
  onClose,
  onSave,
  appointment,
  selectedDate,
  saving,
}) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [staffName, setStaffName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("10:30");
  const [status, setStatus] = useState("scheduled");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    if (appointment) {
      setCustomerName(appointment.customer_name || "");
      setCustomerPhone(appointment.customer_phone || "");
      setServiceName(appointment.service_name || "");
      setStaffName(appointment.staff_name || "");
      setAppointmentDate(appointment.appointment_date || "");
      setStartTime(appointment.start_time?.slice(0, 5) || "10:00");
      setEndTime(appointment.end_time?.slice(0, 5) || "10:30");
      setStatus(appointment.status || "scheduled");
      setNotes(appointment.notes || "");
    } else {
      setCustomerName("");
      setCustomerPhone("");
      setServiceName("");
      setStaffName("");
      setAppointmentDate(selectedDate || "");
      setStartTime("10:00");
      setEndTime("10:30");
      setStatus("scheduled");
      setNotes("");
    }
  }, [isOpen, appointment, selectedDate]);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      customer_name: customerName.trim(),
      customer_phone: customerPhone.trim(),
      service_name: serviceName.trim(),
      staff_name: staffName.trim(),
      appointment_date: appointmentDate,
      start_time: startTime,
      end_time: endTime,
      status,
      notes: notes.trim(),
    });
  }

  const isViewing = !!appointment;

  return (
    <div className="appointment-modal-overlay" onMouseDown={onClose}>
      <div
        className="appointment-modal"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="appointment-modal-header">
          <div>
            <span className="modal-eyebrow">
              {isViewing ? "APPOINTMENT" : "NEW APPOINTMENT"}
            </span>

            <h2>
              {isViewing
                ? appointment.customer_name
                : "Create appointment"}
            </h2>

            <p>
              {isViewing
                ? "View appointment details"
                : "Add a new booking to your salon calendar"}
            </p>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="modal-form-grid">

            <div className="modal-field modal-field-full">
              <label>Customer name</label>

              <input
                type="text"
                placeholder="Sarah Johnson"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                disabled={isViewing}
              />
            </div>

            <div className="modal-field">
              <label>Phone number</label>

              <input
                type="tel"
                placeholder="+61 400 000 000"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                required
                disabled={isViewing}
              />
            </div>

            <div className="modal-field">
              <label>Service</label>

              <input
                type="text"
                placeholder="Haircut"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
                disabled={isViewing}
              />
            </div>

            <div className="modal-field">
              <label>Staff</label>

              <input
                type="text"
                placeholder="Emma"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                disabled={isViewing}
              />
            </div>

            <div className="modal-field">
              <label>Date</label>

              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
                disabled={isViewing}
              />
            </div>

            <div className="modal-field">
              <label>Start time</label>

              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                disabled={isViewing}
              />
            </div>

            <div className="modal-field">
              <label>End time</label>

              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                disabled={isViewing}
              />
            </div>

            <div className="modal-field">
              <label>Status</label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                disabled={isViewing}
              >
                <option value="scheduled">Scheduled</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div className="modal-field modal-field-full">
              <label>Notes</label>

              <textarea
                placeholder="Add any notes about this appointment..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                disabled={isViewing}
              />
            </div>

          </div>

          <div className="appointment-modal-footer">

            <button
              type="button"
              className="modal-secondary-button"
              onClick={onClose}
            >
              Close
            </button>

            {!isViewing && (
              <button
                type="submit"
                className="modal-primary-button"
                disabled={saving}
              >
                {saving ? "Creating..." : "Create appointment"}
              </button>
            )}

          </div>

        </form>
      </div>
    </div>
  );
}