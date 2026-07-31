"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllConcerts } from "@/app/services/supabaseConcertService";

export default function AdminConcertPage() {

  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    loadConcerts();
  }, []);

  async function loadConcerts() {
    const data = await getAllConcerts();
    setConcerts(data);
  }

  return (

    <main className="mx-auto max-w-7xl px-6 py-12">

      <div className="flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          Kelola Concert
        </h1>

        <Link
          href="/dashboard/concerts/create"
          className="rounded-xl bg-pink-600 px-5 py-3 text-white"
        >
          + Tambah Concert
        </Link>

      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border">

        <table className="w-full">

          <thead className="bg-gray-100 dark:bg-slate-800">

            <tr>

              <th className="p-4 text-left">Concert</th>

              <th className="p-4">Artist</th>

              <th className="p-4">City</th>

              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {concerts.map((concert) => (

              <tr key={concert.id} className="border-t">

                <td className="p-4">
                  {concert.title}
                </td>

                <td className="text-center">
                  {concert.artist}
                </td>

                <td className="text-center">
                  {concert.city}
                </td>

                <td className="text-center">

                  <Link
                    href={`/dashboard/concerts/edit/${concert.id}`}
                    className="text-blue-600"
                  >
                    Edit
                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>

  );

}