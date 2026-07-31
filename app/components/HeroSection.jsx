"use client";

import Link from "next/link";
import { Search, CalendarDays, Ticket, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-200 via-yellow-100 to-pink-100 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <div>

          <span className="inline-flex rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white dark:bg-indigo-600">
            🎵 Platform Ticketing Konser
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">

            Temukan

            <span className="block bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">

              Konser Impianmu

            </span>

          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
            Encore Ticket membantu kamu menemukan konser terbaik,
            membeli tiket resmi dengan mudah, aman,
            dan tanpa ribet.
          </p>

          {/* Search */}

          <div className="mt-10 flex overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-800">

            <input
              placeholder="Cari artis atau konser..."
              className="flex-1 px-5 py-4 outline-none bg-transparent"
            />

            <button className="primary-btn flex items-center gap-2 rounded-none px-8">

              <Search size={18} />

              Cari

            </button>

          </div>

          {/* CTA */}

          <div className="mt-8 flex gap-4">

            <Link
              href="/concerts"
              className="primary-btn px-8 py-3"
            >
              Jelajahi Konser
            </Link>

            <Link
              href="/register"
              className="rounded-xl border px-8 py-3 hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              Daftar
            </Link>

          </div>

          {/* Statistics */}

          <div className="mt-12 grid grid-cols-3 gap-6">

            <Stat
              icon={<CalendarDays />}
              value="100+"
              label="Event"
            />

            <Stat
              icon={<Ticket />}
              value="50K+"
              label="Tiket"
            />

            <Stat
              icon={<Users />}
              value="20K+"
              label="User"
            />

          </div>

        </div>

        {/* Right */}

        <div className="mt-16 lg:mt-0 flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=900"
            alt="Concert"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="card p-5 text-center">

      <div className="mb-3 flex justify-center text-pink-500 dark:text-blue-400">
        {icon}
      </div>

      <h3 className="text-2xl font-bold">
        {value}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {label}
      </p>

    </div>
  );
}