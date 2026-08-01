"use client";

import Link from "next/link";

export default function ConcertCard({ concert }) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

      {/* Poster */}
      <div className="aspect-[3/4] overflow-hidden">

        <img
          src={concert.poster_url}
          alt={concert.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

      </div>


      {/* Content */}
      <div className="flex flex-col p-5">


        <h3 className="line-clamp-2 text-xl font-bold">
          {concert.title}
        </h3>


        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {concert.artist}
        </p>


        <div className="mt-4 space-y-1 text-sm">

          <p>
            📍 {concert.venue}, {concert.city}
          </p>

          <p>
            📅{" "}
            {new Date(concert.concert_date).toLocaleDateString(
              "id-ID",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </p>

        </div>


        {/* Button */}
        <Link
          href={`/concerts/${concert.slug}`}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >

          Pesan Sekarang 🎫

        </Link>


      </div>


    </div>
  );
}