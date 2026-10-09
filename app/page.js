"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="homepage">
      {/* =========================
          NAVBAR
      ========================== */}
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="logo-icon">✦</span>
            Ambio
          </Link>

          <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <div className="mobile-auth">
              <Link href="/login" className="login-btn">
                Login
              </Link>

              <Link href="/register" className="nav-cta">
                Get Started
              </Link>
            </div>
          </div>

          <div className="nav-actions">
            <Link href="/login" className="login-btn">
              Login
            </Link>

            <Link href="/register" className="nav-cta">
              Get Started
            </Link>
          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="hero">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">
          <div className="announcement">
            <span className="pulse"></span>
            AI-powered receptionist for modern salons
            <span className="arrow">→</span>
          </div>

          <h1>
            Your salon's
            <br />
            <span className="gradient-text">AI receptionist.</span>
          </h1>

          <p className="hero-description">
            Never miss a customer or appointment again. Ambio answers calls,
            handles enquiries and books appointments automatically — even when
            your salon is busy.
          </p>

          <div className="hero-buttons">
            <Link href="/register" className="primary-btn">
              Get started free
              <span>→</span>
            </Link>

            <a href="#how-it-works" className="secondary-btn">
              See how it works
              <span>▶</span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <span>✓</span>
              24/7 availability
            </div>

            <div className="trust-item">
              <span>✓</span>
              Never miss a call
            </div>

            <div className="trust-item">
              <span>✓</span>
              Automatic booking
            </div>
          </div>
        </div>

        {/* =========================
            DASHBOARD PREVIEW
        ========================== */}
        <div className="dashboard-preview">
          <div className="preview-topbar">
            <div className="window-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="preview-title">
              <span className="mini-logo">✦</span>
              Ambio Dashboard
            </div>

            <div className="preview-user">PG</div>
          </div>

          <div className="preview-body">
            {/* Sidebar */}
            <aside className="preview-sidebar">
              <div className="side-logo">
                <span>✦</span>
                Ambio
              </div>

              <div className="side-item active">
                <span>⌂</span>
                Dashboard
              </div>

              <div className="side-item">
                <span>▣</span>
                Calendar
              </div>

              <div className="side-item">
                <span>◉</span>
                Appointments
              </div>

              <div className="side-item">
                <span>⚙</span>
                Settings
              </div>
            </aside>

            {/* Dashboard */}
            <div className="preview-main">
              <div className="preview-header">
                <div>
                  <p className="small-label">Monday, September 3</p>
                  <h3>Good evening 👋</h3>
                </div>

                <button className="preview-add">
                  + New appointment
                </button>
              </div>

              {/* Stats */}
              <div className="stats-row">
                <div className="stat-card">
                  <span className="stat-icon purple">◷</span>
                  <div>
                    <small>Today's appointments</small>
                    <strong>24</strong>
                  </div>
                  <em>+12%</em>
                </div>

                <div className="stat-card">
                  <span className="stat-icon blue">☎</span>
                  <div>
                    <small>AI calls handled</small>
                    <strong>38</strong>
                  </div>
                  <em>+18%</em>
                </div>

                <div className="stat-card">
                  <span className="stat-icon green">✓</span>
                  <div>
                    <small>Bookings made</small>
                    <strong>17</strong>
                  </div>
                  <em>+24%</em>
                </div>
              </div>

              {/* Appointment area */}
              <div className="preview-grid">
                <div className="calendar-preview">
                  <div className="calendar-heading">
                    <h4>Today's schedule</h4>
                    <span>View calendar →</span>
                  </div>

                  <div className="appointment">
                    <div className="time">10:00</div>
                    <div className="appointment-line purple-line"></div>
                    <div className="appointment-info">
                      <strong>Emma Wilson</strong>
                      <span>Haircut & Blow Dry • Sarah</span>
                    </div>
                    <div className="confirmed">Confirmed</div>
                  </div>

                  <div className="appointment">
                    <div className="time">11:30</div>
                    <div className="appointment-line blue-line"></div>
                    <div className="appointment-info">
                      <strong>Olivia Brown</strong>
                      <span>Hair Colour • Mia</span>
                    </div>
                    <div className="confirmed">Confirmed</div>
                  </div>

                  <div className="appointment">
                    <div className="time">13:00</div>
                    <div className="appointment-line green-line"></div>
                    <div className="appointment-info">
                      <strong>Sophia Taylor</strong>
                      <span>Manicure • Jessica</span>
                    </div>
                    <div className="confirmed">Confirmed</div>
                  </div>

                  <div className="appointment">
                    <div className="time">15:30</div>
                    <div className="appointment-line orange-line"></div>
                    <div className="appointment-info">
                      <strong>Amelia Smith</strong>
                      <span>Facial • Sarah</span>
                    </div>
                    <div className="confirmed">Confirmed</div>
                  </div>
                </div>

                <div className="ai-card">
                  <div className="ai-header">
                    <div className="ai-avatar">✦</div>
                    <div>
                      <strong>Ambio AI</strong>
                      <span>Online & answering calls</span>
                    </div>
                    <div className="online-dot"></div>
                  </div>

                  <div className="ai-wave">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <p>
                    "Your appointment has been successfully booked for
                    tomorrow at 11:30 AM."
                  </p>

                  <div className="call-status">
                    <span>●</span>
                    Call completed
                    <strong>01:42</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LOGOS / TRUST
      ========================== */}
      <section className="trust-section">
        <p>BUILT FOR BUSY SALONS</p>

        <div className="trust-logos">
          <span>GLOW</span>
          <span>luma</span>
          <span>STUDIO 21</span>
          <span>BLUSH</span>
          <span>MONA</span>
        </div>
      </section>

      {/* =========================
          FEATURES
      ========================== */}
      <section className="features-section" id="features">
        <div className="section-heading">
          <div className="section-tag">POWERFUL FEATURES</div>

          <h2>
            Let AI handle the calls.
            <br />
            <span>Let your team handle the salon.</span>
          </h2>

          <p>
            Ambio takes care of repetitive receptionist tasks so your team can
            focus on delivering an amazing experience.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card large">
            <div className="feature-icon purple-bg">☎</div>
            <h3>AI phone receptionist</h3>
            <p>
              Your AI receptionist answers customer calls naturally,
              understands requests and provides information about your salon.
            </p>

            <div className="phone-ui">
              <div className="phone-top">
                <span className="call-dot"></span>
                Incoming call
              </div>

              <div className="phone-avatar">✦</div>

              <strong>Ambio AI</strong>
              <small>Salon Receptionist</small>

              <div className="voice-bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="call-buttons">
                <button>⌕</button>
                <button className="end-call">●</button>
                <button>⌨</button>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon blue-bg">◷</div>
            <h3>Smart appointment booking</h3>
            <p>
              Customers can book appointments over the phone while Ambio
              checks your schedule to prevent double bookings.
            </p>

            <div className="mini-calendar">
              <div className="mini-calendar-top">
                <strong>September 2026</strong>
                <span>‹ &nbsp; ›</span>
              </div>

              <div className="calendar-days">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>

              <div className="calendar-dates">
                <span>31</span>
                <span>1</span>
                <span>2</span>
                <span className="selected">3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon green-bg">◉</div>
            <h3>Customer information</h3>
            <p>
              Keep customer details and appointment information organised in
              one place.
            </p>

            <div className="customer-list">
              <div>
                <span className="customer-avatar">EW</span>
                <strong>Emma Wilson</strong>
                <small>Haircut</small>
              </div>

              <div>
                <span className="customer-avatar">OB</span>
                <strong>Olivia Brown</strong>
                <small>Hair Colour</small>
              </div>

              <div>
                <span className="customer-avatar">ST</span>
                <strong>Sophia Taylor</strong>
                <small>Manicure</small>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange-bg">▣</div>
            <h3>Real-time dashboard</h3>
            <p>
              See appointments, bookings and AI call activity from one simple
              dashboard.
            </p>

            <div className="mini-chart">
              <div className="chart-bars">
                <span style={{ height: "35%" }}></span>
                <span style={{ height: "50%" }}></span>
                <span style={{ height: "42%" }}></span>
                <span style={{ height: "70%" }}></span>
                <span style={{ height: "58%" }}></span>
                <span style={{ height: "85%" }}></span>
                <span style={{ height: "68%" }}></span>
              </div>

              <div className="chart-label">Appointments this week</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          HOW IT WORKS
      ========================== */}
      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <div className="section-tag">HOW IT WORKS</div>

          <h2>
            From phone call to
            <br />
            <span>confirmed appointment.</span>
          </h2>

          <p>
            A simple workflow designed to make running your salon easier.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-icon">☎</div>
            <h3>Customer calls</h3>
            <p>
              A customer calls your salon and Ambio answers instantly.
            </p>
          </div>

          <div className="step-line"></div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-icon">✦</div>
            <h3>AI understands</h3>
            <p>
              Ambio understands what the customer needs and answers their
              questions naturally.
            </p>
          </div>

          <div className="step-line"></div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-icon">◷</div>
            <h3>Appointment booked</h3>
            <p>
              Available slots are checked and the appointment is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          BIG CTA
      ========================== */}
      <section className="cta-section">
        <div className="cta-glow"></div>

        <div className="cta-content">
          <div className="section-tag">READY WHEN YOU ARE</div>

          <h2>
            Your salon deserves
            <br />
            <span>an extra pair of hands.</span>
          </h2>

          <p>
            Let Ambio take care of your calls and appointments while your team
            focuses on your customers.
          </p>

          <Link href="/register" className="primary-btn cta-button">
            Start with Ambio
            <span>→</span>
          </Link>

          <small>No complicated setup. Get started in minutes.</small>
        </div>
      </section>

      {/* =========================
          PRICING
      ========================== */}
      <section className="pricing-section" id="pricing">
        <div className="section-heading">
          <div className="section-tag">SIMPLE PRICING</div>

          <h2>
            Pay for what
            <br />
            <span>you actually use.</span>
          </h2>

          <p>
            No complicated plans. Simple usage-based pricing for growing
            salons.
          </p>
        </div>

        <div className="pricing-card">
          <div className="pricing-info">
            <span className="pricing-label">AMBIO AI RECEPTIONIST</span>

            <h3>
              <span>$0.50</span>
              <small> AUD / minute</small>
            </h3>

            <p>
              Includes AI receptionist calling costs. You only pay for the
              minutes your customers use.
            </p>

            <div className="pricing-features">
              <div>✓ AI phone receptionist</div>
              <div>✓ Appointment booking</div>
              <div>✓ Availability checking</div>
              <div>✓ Customer information</div>
              <div>✓ Salon dashboard</div>
              <div>✓ Dedicated phone number</div>
            </div>

            <Link href="/register" className="primary-btn pricing-btn">
              Get started
              <span>→</span>
            </Link>
          </div>

          <div className="pricing-visual">
            <div className="pricing-circle">
              <span>✦</span>
              <strong>24/7</strong>
              <small>AI Receptionist</small>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-icon">✦</span>
              Ambio
            </Link>

            <p>
              AI-powered reception for modern salons.
              <br />
              Never miss a customer again.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Product</strong>
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#pricing">Pricing</a>
            </div>

            <div>
              <strong>Account</strong>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </div>

            <div>
              <strong>Contact</strong>
              <a href="mailto:hello@ambio.ai">hello@ambio.ai</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Ambio. All rights reserved.</span>
          <span>AI reception, simplified.</span>
        </div>
      </footer>

      {/* =========================
          STYLES
      ========================== */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #050505;
          color: #ffffff;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        .homepage {
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(99, 55, 255, 0.08),
              transparent 30%
            ),
            #050505;
        }

        /* NAVBAR */

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(5, 5, 5, 0.72);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .nav-container {
          max-width: 1200px;
          height: 76px;
          margin: auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 21px;
          font-weight: 750;
          letter-spacing: -0.5px;
        }

        .logo-icon {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: linear-gradient(135deg, #8d6bff, #5d37ff);
          box-shadow: 0 0 25px rgba(111, 74, 255, 0.35);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
          margin-left: auto;
          margin-right: 35px;
        }

        .nav-links a {
          color: #a8a8ad;
          font-size: 14px;
          transition: 0.2s;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .login-btn {
          color: #b5b5bc;
          font-size: 14px;
          padding: 10px 12px;
        }

        .nav-cta {
          padding: 11px 18px;
          border-radius: 10px;
          background: white;
          color: #080808 !important;
          font-size: 14px;
          font-weight: 650;
          transition: 0.2s;
        }

        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.12);
        }

        .menu-btn {
          display: none;
          border: 0;
          background: none;
          color: white;
          font-size: 25px;
        }

        .mobile-auth {
          display: none;
        }

        /* HERO */

        .hero {
          min-height: 100vh;
          padding: 155px 20px 80px;
          position: relative;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .glow-one {
          width: 450px;
          height: 450px;
          background: rgba(105, 67, 255, 0.15);
          top: 70px;
          left: -200px;
        }

        .glow-two {
          width: 400px;
          height: 400px;
          background: rgba(36, 118, 255, 0.1);
          right: -180px;
          top: 180px;
        }

        .announcement {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.035);
          border-radius: 100px;
          color: #bcbcc4;
          font-size: 12px;
          margin-bottom: 28px;
        }

        .pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #8c6cff;
          box-shadow: 0 0 12px #8c6cff;
        }

        .arrow {
          color: #fff;
        }

        .hero h1 {
          font-size: clamp(58px, 8vw, 105px);
          line-height: 0.95;
          letter-spacing: -6px;
          margin: 0;
          font-weight: 800;
        }

        .gradient-text {
          background: linear-gradient(
            100deg,
            #ffffff 10%,
            #9c82ff 45%,
            #6d4aff 80%
          );
          -webkit-background-clip: text;
          color: transparent;
        }

        .hero-description {
          max-width: 650px;
          margin: 30px auto 0;
          color: #9b9ba4;
          font-size: 17px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 22px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 650;
          transition: 0.25s;
        }

        .primary-btn {
          background: white;
          color: #050505;
          box-shadow: 0 10px 40px rgba(255, 255, 255, 0.08);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 45px rgba(255, 255, 255, 0.15);
        }

        .secondary-btn {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
          color: white;
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .hero-trust {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 25px;
          color: #777780;
          font-size: 12px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .trust-item span {
          color: #8b6dff;
        }

        /* DASHBOARD PREVIEW */

        .dashboard-preview {
          max-width: 1120px;
          margin: 75px auto 0;
          position: relative;
          z-index: 3;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          background: #0b0b0d;
          overflow: hidden;
          box-shadow:
            0 50px 100px rgba(0, 0, 0, 0.7),
            0 0 80px rgba(92, 55, 255, 0.08);
          text-align: left;
        }

        .preview-topbar {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: #101012;
        }

        .window-controls {
          display: flex;
          gap: 6px;
        }

        .window-controls span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #333338;
        }

        .preview-title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 11px;
          color: #77777e;
        }

        .mini-logo {
          color: #8c6cff;
          margin-right: 5px;
        }

        .preview-user {
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
          background: #28232f;
          border-radius: 50%;
          font-size: 8px;
          margin-left: auto;
        }

        .preview-body {
          display: flex;
          min-height: 510px;
        }

        .preview-sidebar {
          width: 170px;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          padding: 22px 12px;
          background: #0a0a0c;
        }

        .side-logo {
          font-weight: 700;
          font-size: 14px;
          margin: 0 10px 28px;
        }

        .side-logo span {
          color: #896aff;
        }

        .side-item {
          display: flex;
          gap: 10px;
          align-items: center;
          padding: 10px;
          margin-bottom: 5px;
          border-radius: 8px;
          font-size: 10px;
          color: #6f6f77;
        }

        .side-item.active {
          color: white;
          background: rgba(123, 92, 255, 0.12);
        }

        .preview-main {
          flex: 1;
          padding: 28px;
        }

        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .small-label {
          color: #65656d;
          font-size: 9px;
          margin: 0 0 5px;
        }

        .preview-header h3 {
          margin: 0;
          font-size: 18px;
        }

        .preview-add {
          border: 0;
          border-radius: 7px;
          padding: 8px 12px;
          background: #7555ff;
          color: white;
          font-size: 9px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 22px;
        }

        .stat-card {
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #111113;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
        }

        .stat-icon {
          width: 29px;
          height: 29px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          font-size: 12px;
        }

        .purple {
          background: rgba(129, 95, 255, 0.15);
          color: #967aff;
        }

        .blue {
          background: rgba(58, 137, 255, 0.13);
          color: #5895ff;
        }

        .green {
          background: rgba(50, 194, 125, 0.12);
          color: #53d695;
        }

        .stat-card small {
          display: block;
          color: #686870;
          font-size: 7px;
        }

        .stat-card strong {
          display: block;
          margin-top: 3px;
          font-size: 16px;
        }

        .stat-card em {
          margin-left: auto;
          font-style: normal;
          color: #5ed69a;
          font-size: 7px;
        }

        .preview-grid {
          display: grid;
          grid-template-columns: 1.7fr 1fr;
          gap: 12px;
          margin-top: 12px;
        }

        .calendar-preview,
        .ai-card {
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          background: #111113;
          padding: 15px;
        }

        .calendar-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .calendar-heading h4 {
          font-size: 10px;
          margin: 0;
        }

        .calendar-heading span {
          font-size: 7px;
          color: #7e6bff;
        }

        .appointment {
          display: flex;
          align-items: center;
          min-height: 52px;
          border-top: 1px solid rgba(255, 255, 255, 0.045);
        }

        .time {
          width: 42px;
          color: #67676e;
          font-size: 8px;
        }

        .appointment-line {
          width: 2px;
          height: 30px;
          border-radius: 2px;
          margin-right: 10px;
        }

        .purple-line {
          background: #8667ff;
        }

        .blue-line {
          background: #4d8dff;
        }

        .green-line {
          background: #45d18d;
        }

        .orange-line {
          background: #e6a355;
        }

        .appointment-info {
          flex: 1;
        }

        .appointment-info strong {
          display: block;
          font-size: 9px;
        }

        .appointment-info span {
          display: block;
          margin-top: 3px;
          font-size: 7px;
          color: #696970;
        }

        .confirmed {
          font-size: 6px;
          color: #55d397;
          background: rgba(70, 207, 140, 0.08);
          padding: 4px 6px;
          border-radius: 5px;
        }

        .ai-card {
          display: flex;
          flex-direction: column;
        }

        .ai-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ai-avatar {
          width: 29px;
          height: 29px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #7755ff, #a88fff);
          font-size: 12px;
        }

        .ai-header strong {
          display: block;
          font-size: 9px;
        }

        .ai-header span {
          display: block;
          font-size: 7px;
          color: #67676e;
          margin-top: 2px;
        }

        .online-dot {
          width: 6px;
          height: 6px;
          background: #4bd18e;
          border-radius: 50%;
          margin-left: auto;
        }

        .ai-wave {
          height: 80px;
          margin: 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .ai-wave span {
          width: 3px;
          height: 25px;
          border-radius: 4px;
          background: #795bff;
          opacity: 0.75;
        }

        .ai-wave span:nth-child(2) {
          height: 38px;
        }

        .ai-wave span:nth-child(3) {
          height: 55px;
        }

        .ai-wave span:nth-child(4) {
          height: 32px;
        }

        .ai-wave span:nth-child(5) {
          height: 65px;
        }

        .ai-wave span:nth-child(6) {
          height: 42px;
        }

        .ai-wave span:nth-child(7) {
          height: 58px;
        }

        .ai-wave span:nth-child(8) {
          height: 30px;
        }

        .ai-wave span:nth-child(9) {
          height: 47px;
        }

        .ai-wave span:nth-child(10) {
          height: 27px;
        }

        .ai-wave span:nth-child(11) {
          height: 38px;
        }

        .ai-card p {
          color: #9999a1;
          font-size: 9px;
          line-height: 1.6;
          text-align: center;
        }

        .call-status {
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 12px;
          color: #696970;
          font-size: 7px;
        }

        .call-status span {
          color: #50d08f;
          margin-right: 5px;
        }

        .call-status strong {
          float: right;
          color: #a4a4ab;
        }

        /* TRUST */

        .trust-section {
          max-width: 1000px;
          margin: 40px auto 0;
          padding: 40px 20px 100px;
          text-align: center;
        }

        .trust-section > p {
          color: #55555c;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .trust-logos {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 60px;
          color: #404047;
          font-size: 18px;
          font-weight: 700;
        }

        /* SECTION HEADINGS */

        .features-section,
        .how-section,
        .pricing-section {
          max-width: 1150px;
          margin: auto;
          padding: 110px 25px;
        }

        .section-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 55px;
        }

        .section-tag {
          display: inline-block;
          color: #866aff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(40px, 5vw, 62px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .section-heading h2 span {
          color: #65656d;
        }

        .section-heading p {
          color: #85858d;
          line-height: 1.7;
          margin-top: 20px;
          font-size: 14px;
        }

        /* FEATURES */

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .feature-card {
          min-height: 360px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.045),
            rgba(255, 255, 255, 0.015)
          );
        }

        .feature-card.large {
          min-height: 500px;
          grid-row: span 2;
        }

        .feature-icon {
          width: 42px;
          height: 42px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          font-size: 17px;
        }

        .purple-bg {
          background: rgba(125, 91, 255, 0.13);
          color: #9479ff;
        }

        .blue-bg {
          background: rgba(63, 139, 255, 0.12);
          color: #5997ff;
        }

        .green-bg {
          background: rgba(55, 201, 137, 0.11);
          color: #5bd99b;
        }

        .orange-bg {
          background: rgba(233, 158, 68, 0.1);
          color: #e9aa66;
        }

        .feature-card h3 {
          margin: 22px 0 9px;
          font-size: 19px;
        }

        .feature-card > p {
          color: #77777f;
          line-height: 1.7;
          font-size: 13px;
          max-width: 470px;
        }

        /* PHONE UI */

        .phone-ui {
          width: 230px;
          margin: 35px auto 0;
          padding: 20px;
          text-align: center;
          background: #0b0b0d;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 22px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .phone-top {
          color: #66666e;
          font-size: 8px;
        }

        .call-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          background: #5ad698;
          border-radius: 50%;
          margin-right: 4px;
        }

        .phone-avatar {
          width: 55px;
          height: 55px;
          display: grid;
          place-items: center;
          margin: 22px auto 10px;
          border-radius: 18px;
          background: linear-gradient(135deg, #7654ff, #ad99ff);
          font-size: 22px;
          box-shadow: 0 0 35px rgba(117, 83, 255, 0.25);
        }

        .phone-ui strong {
          display: block;
          font-size: 12px;
        }

        .phone-ui small {
          color: #65656d;
          font-size: 8px;
        }

        .voice-bars {
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
          margin: 15px 0;
        }

        .voice-bars i {
          width: 3px;
          height: 18px;
          border-radius: 4px;
          background: #8062ff;
        }

        .voice-bars i:nth-child(2),
        .voice-bars i:nth-child(6) {
          height: 28px;
        }

        .voice-bars i:nth-child(3),
        .voice-bars i:nth-child(5) {
          height: 36px;
        }

        .voice-bars i:nth-child(4) {
          height: 42px;
        }

        .call-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
        }

        .call-buttons button {
          border: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #19191c;
          color: #888890;
        }

        .call-buttons .end-call {
          background: #e45c66;
          color: white;
          transform: rotate(45deg);
        }

        /* MINI CALENDAR */

        .mini-calendar {
          margin-top: 30px;
          padding: 15px;
          border-radius: 12px;
          background: #0c0c0f;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .mini-calendar-top {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          margin-bottom: 15px;
        }

        .mini-calendar-top span {
          color: #66666d;
        }

        .calendar-days,
        .calendar-dates {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          gap: 7px;
          font-size: 8px;
        }

        .calendar-days {
          color: #57575e;
          margin-bottom: 10px;
        }

        .calendar-dates {
          color: #9a9aa1;
        }

        .calendar-dates .selected {
          width: 22px;
          height: 22px;
          margin: -6px auto 0;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #7556ff;
          color: white;
        }

        /* CUSTOMER LIST */

        .customer-list {
          margin-top: 25px;
          padding: 5px 0;
        }

        .customer-list > div {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .customer-avatar {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          background: #1e1b28;
          border-radius: 50%;
          color: #a28cff;
          font-size: 7px;
        }

        .customer-list strong {
          font-size: 9px;
        }

        .customer-list small {
          margin-left: auto;
          color: #5e5e65;
          font-size: 7px;
        }

        /* CHART */

        .mini-chart {
          margin-top: 30px;
          height: 120px;
          padding: 15px;
          background: #0c0c0f;
          border-radius: 12px;
        }

        .chart-bars {
          height: 80px;
          display: flex;
          align-items: end;
          gap: 10px;
        }

        .chart-bars span {
          flex: 1;
          border-radius: 3px 3px 0 0;
          background: linear-gradient(to top, #5d3dff, #987fff);
          opacity: 0.8;
        }

        .chart-label {
          color: #606068;
          font-size: 7px;
          margin-top: 7px;
        }

        /* HOW IT WORKS */

        .how-section {
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .steps {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 15px;
        }

        .step {
          width: 30%;
          text-align: center;
          position: relative;
        }

        .step-number {
          color: #5c5c63;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .step-icon {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          margin: 15px auto;
          border: 1px solid rgba(125, 93, 255, 0.25);
          border-radius: 17px;
          background: rgba(113, 79, 255, 0.08);
          color: #9277ff;
          font-size: 21px;
        }

        .step h3 {
          font-size: 16px;
          margin: 10px 0;
        }

        .step p {
          color: #6e6e76;
          line-height: 1.6;
          font-size: 12px;
        }

        .step-line {
          width: 70px;
          height: 1px;
          margin-top: 110px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(128, 98, 255, 0.4),
            transparent
          );
        }

        /* CTA */

        .cta-section {
          position: relative;
          max-width: 1100px;
          margin: 50px auto;
          padding: 100px 25px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 25px;
          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(103, 66, 255, 0.18),
              transparent 55%
            ),
            #0b0b0e;
          text-align: center;
        }

        .cta-glow {
          position: absolute;
          width: 350px;
          height: 350px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: rgba(104, 66, 255, 0.1);
          filter: blur(90px);
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-content h2 {
          font-size: clamp(42px, 6vw, 68px);
          line-height: 0.98;
          letter-spacing: -4px;
          margin: 0;
        }

        .cta-content h2 span {
          color: #65656d;
        }

        .cta-content p {
          max-width: 570px;
          margin: 22px auto 28px;
          color: #7f7f87;
          line-height: 1.7;
          font-size: 14px;
        }

        .cta-button {
          margin-bottom: 14px;
        }

        .cta-content small {
          display: block;
          color: #55555c;
          font-size: 10px;
        }

        /* PRICING */

        .pricing-card {
          max-width: 850px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          overflow: hidden;
          background: #0c0c0f;
        }

        .pricing-info {
          padding: 45px;
        }

        .pricing-label {
          color: #866bff;
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .pricing-info h3 {
          margin: 15px 0 8px;
          font-size: 20px;
        }

        .pricing-info h3 span {
          font-size: 54px;
          letter-spacing: -3px;
        }

        .pricing-info h3 small {
          color: #66666e;
          font-size: 12px;
          font-weight: 400;
        }

        .pricing-info > p {
          color: #77777f;
          font-size: 12px;
          line-height: 1.7;
          max-width: 430px;
        }

        .pricing-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 25px 0;
          color: #a3a3aa;
          font-size: 11px;
        }

        .pricing-features div::first-letter {
          color: #7e62ff;
        }

        .pricing-btn {
          margin-top: 5px;
        }

        .pricing-visual {
          display: grid;
          place-items: center;
          background:
            radial-gradient(
              circle,
              rgba(105, 68, 255, 0.2),
              transparent 65%
            ),
            #0a0a0c;
          border-left: 1px solid rgba(255, 255, 255, 0.06);
        }

        .pricing-circle {
          width: 190px;
          height: 190px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(132, 101, 255, 0.3);
          box-shadow:
            0 0 70px rgba(103, 65, 255, 0.15),
            inset 0 0 50px rgba(103, 65, 255, 0.06);
        }

        .pricing-circle span {
          color: #8d72ff;
          font-size: 22px;
        }

        .pricing-circle strong {
          font-size: 25px;
          margin-top: 5px;
        }

        .pricing-circle small {
          color: #65656d;
          font-size: 8px;
          margin-top: 3px;
        }

        /* FOOTER */

        .footer {
          max-width: 1150px;
          margin: 60px auto 0;
          padding: 70px 25px 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          gap: 50px;
        }

        .footer-brand p {
          color: #66666e;
          font-size: 11px;
          line-height: 1.7;
          margin-top: 15px;
        }

        .footer-links {
          display: flex;
          gap: 90px;
        }

        .footer-links div {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links strong {
          color: #a8a8af;
          font-size: 11px;
          margin-bottom: 5px;
        }

        .footer-links a {
          color: #5f5f67;
          font-size: 10px;
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-bottom {
          margin-top: 60px;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: #4d4d54;
          font-size: 9px;
        }

        /* RESPONSIVE */

        @media (max-width: 850px) {
          .nav-links {
            display: none;
          }

          .nav-actions {
            display: none;
          }

          .menu-btn {
            display: block;
          }

          .nav-links.mobile-open {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 5px;
            top: 76px;
            left: 0;
            right: 0;
            margin: 0;
            padding: 20px;
            background: rgba(8, 8, 10, 0.98);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .nav-links.mobile-open > a {
            padding: 13px;
          }

          .mobile-auth {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 10px;
          }

          .mobile-auth .login-btn {
            text-align: center;
          }

          .mobile-auth .nav-cta {
            text-align: center;
          }

          .hero h1 {
            letter-spacing: -4px;
          }

          .preview-sidebar {
            display: none;
          }

          .stats-row {
            grid-template-columns: 1fr;
          }

          .preview-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-preview {
            margin-top: 50px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card.large {
            grid-row: auto;
          }

          .steps {
            flex-direction: column;
            align-items: center;
          }

          .step {
            width: 100%;
            max-width: 350px;
          }

          .step-line {
            width: 1px;
            height: 40px;
            margin: 0;
          }

          .pricing-card {
            grid-template-columns: 1fr;
          }

          .pricing-visual {
            min-height: 300px;
            border-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
          }

          .footer-main {
            flex-direction: column;
          }

          .footer-links {
            gap: 40px;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 550px) {
          .hero {
            padding-top: 130px;
          }

          .hero h1 {
            font-size: 55px;
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-buttons {
            flex-direction: column;
            max-width: 280px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-trust {
            flex-direction: column;
            gap: 8px;
            align-items: center;
          }

          .preview-main {
            padding: 15px;
          }

          .preview-header h3 {
            font-size: 15px;
          }

          .preview-add {
            display: none;
          }

          .features-section,
          .how-section,
          .pricing-section {
            padding: 80px 18px;
          }

          .section-heading h2 {
            letter-spacing: -2px;
          }

          .pricing-info {
            padding: 30px 22px;
          }

          .pricing-info h3 span {
            font-size: 44px;
          }

          .pricing-features {
            grid-template-columns: 1fr;
          }

          .cta-section {
            margin: 20px;
            padding: 75px 20px;
          }

          .cta-content h2 {
            letter-spacing: -2px;
          }

          .trust-logos {
            gap: 25px;
            font-size: 14px;
          }

          .footer-links {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
}