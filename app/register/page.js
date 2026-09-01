"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
    <main style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h1>Create Your Salon Account</h1>

      <form onSubmit={handleRegister}>

        <div>
          <label>Salon Name</label>
          <input
            type="text"
            placeholder="Glow Beauty Salon"
            value={salonName}
            onChange={(e) => setSalonName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="salon@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="+61..."
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>

      </form>

      {message && <p>{message}</p>}
    </main>
  );
}