"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="login-page">

      <div className="login-glow"></div>

      <nav className="login-nav">
        <Link href="/" className="login-logo">
          <span className="logo-box">✦</span>
          Ambio
        </Link>

        <Link href="/" className="back-link">
          ← Back to home
        </Link>
      </nav>

      <div className="login-wrapper">

        <div className="login-card">

          <div className="login-icon">
            ✦
          </div>

          <h1>Welcome back</h1>

          <p className="login-subtitle">
            Sign in to your Ambio salon dashboard.
          </p>

          <form onSubmit={handleLogin}>

            <div className="form-group">
              <label>Email address</label>

              <input
                type="email"
                placeholder="you@salon.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in →"}
            </button>

          </form>

          <div className="divider">
            <span></span>
            <small>OR</small>
            <span></span>
          </div>

          <p className="register-text">
            Don't have an account?
          </p>

          <Link
            href="/register"
            className="register-button"
          >
            Create your salon account
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