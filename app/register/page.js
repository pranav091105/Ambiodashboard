"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();

  const [salonName, setSalonName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const supabase = createClient();

    // STEP 1: Create user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log("SIGNUP DATA:", data);
    console.log("SIGNUP ERROR:", error);

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    // STEP 2: Check if user was created
    if (!data.user) {
      setMessage("User could not be created.");
      setLoading(false);
      return;
    }

    // STEP 3: Create business record
    const { error: businessError } = await supabase
      .from("businesses")
      .insert([
        {
          user_id: data.user.id,
          name: salonName,
          email: email,
          phone_number: phoneNumber,
        },
      ]);
      console.log("BUSINESS ERROR:", businessError);

    if (businessError) {
      setMessage(businessError.message);
      setLoading(false);
      return;
    }

    setMessage("Account created successfully!");

    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);

    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-glow"></div>

      {/* Navigation */}
      <nav className="login-nav">
        <Link href="/" className="login-logo">
          <span className="logo-box">✦</span>
          Ambio
        </Link>

        <Link href="/login" className="back-link">
          ← Already have an account?
        </Link>
      </nav>

      {/* Registration Card */}
      <div className="login-wrapper">
        <div className="login-card">

          <div className="login-icon">✦</div>

          <h1>Create your account</h1>

          <p className="login-subtitle">
            Set up your Ambio salon dashboard.
          </p>

          <form onSubmit={handleRegister}>

            {/* Salon Name */}
            <div className="form-group">
              <label>Salon name</label>

              <input
                type="text"
                placeholder="Glow Beauty Salon"
                value={salonName}
                onChange={(e) => setSalonName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email address</label>

              <input
                type="email"
                placeholder="salon@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone number</label>

              <input
                type="tel"
                placeholder="+61..."
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Message */}
            {message && (
              <div className="login-error">
                {message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account →"}
            </button>

          </form>

          {/* Login */}
          <div className="divider">
            <span></span>
            <small>OR</small>
            <span></span>
          </div>

          <p className="register-text">
            Already have an account?
          </p>

          <Link
            href="/login"
            className="register-button"
          >
            Sign in to Ambio
          </Link>

          <div className="security">
            ✓ Secure authentication powered by Supabase
          </div>

        </div>

        <p className="bottom-text">
          AI-powered receptionist for modern salons.
        </p>
      </div>
    </div>
  );
}