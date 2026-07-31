"use client";

import Link from "next/link";

export default function AdminPage() {

  return (

    <main className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="text-4xl font-bold">

        Admin Dashboard

      </h1>

      <p className="mt-3 text-gray-500">

        Kelola seluruh data Encore.

      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">

        <Link
          href="/admin/concerts"
          className="card p-8 text-center hover:shadow-lg"
        >
          <h2 className="text-2xl font-bold">
            🎵
          </h2>

          <p className="mt-4">
            Kelola Konser
          </p>
        </Link>

        <Link
          href="/admin/tickets"
          className="card p-8 text-center hover:shadow-lg"
        >
          <h2 className="text-2xl font-bold">
            🎫
          </h2>

          <p className="mt-4">
            Kelola Tiket
          </p>
        </Link>

        <Link
          href="/admin/bookings"
          className="card p-8 text-center hover:shadow-lg"
        >
          <h2 className="text-2xl font-bold">
            📋
          </h2>

          <p className="mt-4">
            Kelola Booking
          </p>
        </Link>

      </div>

    </main>

  );

}