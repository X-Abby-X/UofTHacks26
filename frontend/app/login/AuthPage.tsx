"use client";

import { useState } from "react";
import { supabase } from "../../storage/lib/supabaseClient";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signUp = async () => {
  const { error } = await supabase.auth.signUp({ email, password });
  setMessage(error ? error.message : "Check your email to confirm");
};


  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else setMessage("Signed in!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Auth</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>

      <p>{message}</p>
      <br />
    </div>
  );
}
