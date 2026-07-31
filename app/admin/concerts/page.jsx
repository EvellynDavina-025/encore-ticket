"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  getConcerts,
  deleteConcert,
} from "@/app/services/adminConcertService";

export default function AdminConcertPage() {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    loadConcerts();
  }, []);

  async function loadConcerts() {
    const data = await getConcerts();
    setConcerts(data);
  }

  async function handleDelete(id) {
    const confirmDelete = confirm(
      "Yakin ingin menghapus konser ini?"
    );

    if (!confirmDelete) return;

    const success = await deleteConcert(id);

    if (success) {
      loadConcerts();
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <div className="flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          Kelola Concert
        </h1>

        <Link
          href="/admin/concerts/add"
          className="primary-btn px-5 py-3"
        >
          + Tambah Concert
        </Link>

      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border">

        <table className="w-full">

          <thead className="bg-gray-100 dark:bg-slate-800">

            <tr>

              <th className="p-4 text-left">Judul</th>

              <th className="p-4 text-left">Artist</th>

              <th className="p-4 text-left">Kota</th>

              <th className="p-4 text-left">Tanggal</th>

              <th className="p-4 text-center">
                Aksi
              </th>

            </tr>

          </thead>

          <tbody>

            {concerts.map((concert) => (

              <tr
                key={concert.id}
                className="border-t"
              >

                <td className="p-4">
                  {concert.title}
                </td>

                <td className="p-4">
                  {concert.artist}
                </td>

                <td className="p-4">
                  {concert.city}
                </td>

                <td className="p-4">
                  {new Date(
                    concert.concert_date
                  ).toLocaleDateString("id-ID")}
                </td>

                <td className="space-x-2 p-4 text-center">

                  <Link
                    href={`/admin/concerts/edit/${concert.id}`}
                    className="rounded bg-blue-500 px-4 py-2 text-white"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(concert.id)
                    }
                    className="rounded bg-red-500 px-4 py-2 text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}