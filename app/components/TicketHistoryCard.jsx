"use client";

import Image from "next/image";
import QRCode from "react-qr-code";

export default function TicketHistoryCard({ booking }) {
  const concert = booking.concerts;
  const ticket = booking.ticket_categories;

  const formattedDate = concert?.concert_date
    ? new Date(concert.concert_date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";

  const formattedPrice = Number(booking.total_price).toLocaleString("id-ID");

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">

      <div className="grid md:grid-cols-3">

        {/* Poster */}
        <div className="relative h-72">

          <Image
            src={
              concert?.poster_url ||
              "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
            }
            alt={concert?.title || "Concert"}
            fill
            className="object-cover"
          />

        </div>

        {/* Detail */}
        <div className="col-span-2 p-8">

          <div className="flex flex-wrap items-center justify-between gap-3">

            <div>

              <h2 className="text-3xl font-bold">
                {concert?.title}
              </h2>

              <p className="mt-1 text-pink-500">
                {concert?.artist}
              </p>

            </div>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                booking.status === "PAID"
                  ? "bg-green-100 text-green-700"
                  : booking.status === "PENDING"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {booking.status}
            </span>

          </div>

          {/* Booking Code */}
          <div className="mt-6">

            <p className="text-sm text-gray-500">
              Booking Code
            </p>

            <p className="font-mono text-lg font-bold">
              {booking.booking_code}
            </p>

          </div>

          {/* Informasi Tiket */}
          <div className="mt-6 grid gap-3 text-gray-700 dark:text-gray-300">

            <p>
              📅 <strong>{formattedDate}</strong>
            </p>

            <p>
              📍 {concert?.city}
            </p>

            <p>
              🏟 {concert?.venue}
            </p>

            <p>
              🎫 {ticket?.category}
            </p>

            <p>
              🎟 Jumlah Tiket : <strong>{booking.quantity}</strong>
            </p>

            <p>
              💰 Total Pembayaran :
              <strong className="ml-2 text-pink-600 dark:text-blue-400">
                Rp {formattedPrice}
              </strong>
            </p>

          </div>

          {/* QR Code */}
          <div className="mt-8 flex flex-col items-center rounded-2xl border bg-gray-50 p-6 dark:border-slate-700 dark:bg-slate-800">

            <QRCode
              value={booking.booking_code}
              size={170}
            />

            <p className="mt-4 text-center text-sm text-gray-500">
              Scan QR Code ini saat memasuki venue konser.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}