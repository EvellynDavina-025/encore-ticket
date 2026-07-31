"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { getDashboardStats } from "@/app/services/dashboardService";

export default function DashboardPage() {
  const [profile, setProfile] = useState(null);

  const [stats, setStats] = useState({
    totalConcerts: 0,
    totalBookings: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    setProfile(data);

    const dashboardStats = await getDashboardStats();
    setStats(dashboardStats);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      {/* Hero */}

      <section className="rounded-3xl bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 p-10 text-white shadow-xl dark:from-blue-700 dark:via-blue-600 dark:to-indigo-700">

        <h1 className="text-5xl font-black">
          Dashboard
        </h1>

        <p className="mt-3 text-lg opacity-90">
          Welcome back,
          <span className="font-bold">
            {" "}
            {profile?.full_name ?? "User"}
          </span>
          👋
        </p>

        <p className="mt-2 max-w-2xl opacity-80">
          Kelola akun, pantau statistik aplikasi, dan lihat perkembangan Encore Ticket secara real-time.
        </p>

      </section>

      {/* Statistik */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl bg-pink-600 p-7 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-600">
          <p className="text-sm opacity-80">
            🎤 Total Concert
          </p>

          <h2 className="mt-3 text-5xl font-black">
            {stats.totalConcerts}
          </h2>
        </div>

        <div className="rounded-3xl bg-pink-500 p-7 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-500">
          <p className="text-sm opacity-80">
            🎫 Total Booking
          </p>

          <h2 className="mt-3 text-5xl font-black">
            {stats.totalBookings}
          </h2>
        </div>

        <div className="rounded-3xl bg-pink-400 p-7 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-400">
          <p className="text-sm opacity-80">
            👤 Total User
          </p>

          <h2 className="mt-3 text-5xl font-black">
            {stats.totalUsers}
          </h2>
        </div>

        <div className="rounded-3xl bg-pink-700 p-7 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-700">
          <p className="text-sm opacity-80">
            💰 Revenue
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Rp {stats.totalRevenue.toLocaleString("id-ID")}
          </h2>
        </div>

      </div>

      {/* Profile */}

      <div className="mt-12 rounded-3xl border border-pink-100 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">

        <h2 className="text-3xl font-bold">
          My Profile
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div>

            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {profile?.full_name ?? "-"}
            </h3>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Email
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {profile?.email ?? "-"}
            </h3>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Role
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {profile?.role ?? "User"}
            </h3>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <h3 className="mt-2 text-xl font-bold text-green-600">
              Active
            </h3>

          </div>

        </div>

      </div>

      {/* Quick Menu */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold">
          Quick Menu
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <Link
            href="/dashboard/concerts"
            className="rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="text-5xl">
              🎤
            </div>

            <h3 className="mt-4 text-2xl font-bold">
              Kelola Concert
            </h3>

            <p className="mt-2 text-gray-500">
              Tambah, edit, dan hapus konser.
            </p>
          </Link>

          <Link
            href="/my-ticket"
            className="rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="text-5xl">
              🎫
            </div>

            <h3 className="mt-4 text-2xl font-bold">
              My Ticket
            </h3>

            <p className="mt-2 text-gray-500">
              Lihat seluruh tiket yang telah dibeli.
            </p>
          </Link>

          <Link
            href="/concerts"
            className="rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="text-5xl">
              🎵
            </div>

            <h3 className="mt-4 text-2xl font-bold">
              Explore Concert
            </h3>

            <p className="mt-2 text-gray-500">
              Temukan konser terbaru dari artis favoritmu.
            </p>
          </Link>

        </div>

      </div>

    </main>
  );
}