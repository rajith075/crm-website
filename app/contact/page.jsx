"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const { error } = await supabase.from("leads").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        status: "New",
      },
    ]);

    if (error) {
      console.error("Insert Error:", error.message);
      alert("Error: " + error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#141418] p-8 rounded-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">Contact</h1>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[#101014] rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[#101014] rounded"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 bg-[#101014] rounded"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[#101014] rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 py-3 rounded hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {success && (
          <p className="text-green-400 text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}