"use client";

import Link from "next/link";

export default function TicketCard({ ticket }) {
  return (
    <div className="card p-6">

      <h2 className="text-2xl font-bold">
        {ticket.category}
      </h2>

      <p className="mt-3 text-3xl font-bold text-pink-600 dark:text-blue-400">
        Rp {Number(ticket.price).toLocaleString("id-ID")}
      </p>

        <div className="mt-4">

        <span
        className={`
        rounded-full
        px-3
        py-1
        text-sm
        font-semibold
        ${
        ticket.remaining_stock > 100
        ? "bg-green-100 text-green-700"

        : ticket.remaining_stock > 20

        ? "bg-yellow-100 text-yellow-700"

        : "bg-red-100 text-red-700"

        }
        `}
        >

        Sisa {ticket.remaining_stock} tiket

        </span>

        </div>

      <Link
        href={`/booking?concert=${ticket.concert_id}&ticket=${ticket.id}&price=${ticket.price}&category=${encodeURIComponent(ticket.category)}`}
        className="primary-btn mt-6 block rounded-xl py-3 text-center"
      >
        Pilih Tiket
      </Link>

    </div>
  );
}