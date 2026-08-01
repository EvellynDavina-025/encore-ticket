"use client";

import Link from "next/link";

export default function ConcertCard({ concert }) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">

      {/* Poster */}
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-slate-800">

        <img
          src={concert.poster_url}
          alt={concert.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

      </div>


      {/* Content */}
      <div className="flex flex-col p-5">


        {/* Title */}
        <h3 className="line-clamp-2 text-xl font-bold">
          {concert.title}
        </h3>


        {/* Artist */}
        <p className="mt-2 text-sm font-medium text-pink-600 dark:text-blue-400">
          {concert.artist}
        </p>



        {/* Information */}
        <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">


          <p className="flex items-center gap-2">
            📍
            <span>
              {concert.venue}, {concert.city}
            </span>
          </p>


          <p className="flex items-center gap-2">
            📅
            <span>
              {new Date(
                concert.concert_date
              ).toLocaleDateString(
                "id-ID",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}
            </span>
          </p>


        </div>



        {/* Description */}
        {concert.description && (

          <p className="mt-4 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">

            {concert.description}

          </p>

        )}




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