"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ADMIN_EMAIL = "admin@crm.com";
  const ADMIN_PASSWORD = "Admin@123";

  const handleLogin = (e: any) => {
    e.preventDefault();
    setError("");

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      router.push("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0F] flex items-center justify-center text-white overflow-hidden px-6">

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-orange-500/30 blur-[180px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-yellow-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px]" />
      </div>

      <div className="w-full max-w-md">

        <div className="bg-gradient-to-b from-[#141418] to-[#101014] 
                        border border-white/10 
                        rounded-3xl p-10 
                        shadow-[0_0_80px_rgba(0,0,0,0.8)]">

          <h1 className="text-2xl font-semibold text-center mb-2">
            Admin Access
          </h1>

          <p className="text-center text-gray-500 text-sm mb-8">
            CRM Dashboard Secure Login
          </p>

          <form onSubmit={handleLogin} className="space-y-6">

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#101014] border border-white/10 
                         rounded-xl px-5 py-3 text-sm 
                         focus:outline-none 
                         focus:border-orange-400/60 transition"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#101014] border border-white/10 
                         rounded-xl px-5 py-3 text-sm 
                         focus:outline-none 
                         focus:border-orange-400/60 transition"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 
                         py-3 rounded-xl text-sm font-medium 
                         hover:opacity-90 transition"
            >
              Enter Dashboard
            </button>
            <div className="mt-6 text-center text-sm text-gray-400">
  <p className="mb-1 text-gray-500">Demo Admin Credentials</p>

  <p>
    <span className="text-gray-500">Email:</span>{" "}
    <span className="text-white">admin@crm.com</span>
  </p>

  <p>
    <span className="text-gray-500">Password:</span>{" "}
    <span className="text-white">Admin@123</span>
  </p>
</div>
<div className="mt-6 text-center">
  <a
    href="/contact"
    className="inline-block mt-3 text-sm text-orange-400 hover:underline"
  >
    Open Contact Form (User View)
  </a>
</div>

            {error && (
              <p className="text-red-400 text-center text-sm">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}