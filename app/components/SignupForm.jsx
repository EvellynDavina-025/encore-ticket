"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (
      !form.fullName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Semua field wajib diisi.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Konfirmasi password tidak sama.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.fullName,
        },
      },
    });

    if (error) {
      setError("Registrasi gagal. Silakan coba lagi.");
      setLoading(false);
      return;
    }

    router.push("/login?message=check-email");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl space-y-5"
    >
      <h1 className="text-3xl font-bold text-center">
        Buat Akun Encore Ticket
      </h1>

      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded-xl">
          {error}
        </div>
      )}

      <input
        name="fullName"
        placeholder="Nama Lengkap"
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <input
        name="confirmPassword"
        type="password"
        placeholder="Konfirmasi Password"
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <button
        disabled={loading}
        className="w-full py-3 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
      >
        {loading ? "Membuat akun..." : "Daftar"}
      </button>
    </form>
  );
}