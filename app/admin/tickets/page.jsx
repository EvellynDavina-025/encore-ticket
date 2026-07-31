"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  getTickets,
  deleteTicket,
} from "@/app/services/adminTicketService";

export default function AdminTicketPage() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    loadTickets();
  }, []);

  async function loadTickets() {
    setTickets(await getTickets());
  }

  async function handleDelete(id) {

    if (!confirm("Hapus tiket?")) return;

    await deleteTicket(id);

    loadTickets();
  }

  return (

    <main className="mx-auto max-w-7xl px-6 py-12">

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          Kelola Ticket
        </h1>

        <Link
          href="/admin/tickets/add"
          className="primary-btn px-5 py-3"
        >
          + Tambah Ticket
        </Link>

      </div>

      <div className="mt-10 overflow-x-auto rounded-xl border">

        <table className="w-full">

          <thead className="bg-gray-100 dark:bg-slate-800">

            <tr>

              <th className="p-4">Concert</th>

              <th>Kategori</th>

              <th>Harga</th>

              <th>Stock</th>

              <th>Sisa</th>

              <th>Aksi</th>

            </tr>

          </thead>

          <tbody>

            {tickets.map(ticket => (

              <tr
                key={ticket.id}
                className="border-t"
              >

                <td className="p-4">
                  {ticket.concerts?.title}
                </td>

                <td>{ticket.category}</td>

                <td>

                  Rp {Number(ticket.price).toLocaleString("id-ID")}

                </td>

                <td>{ticket.stock}</td>

                <td>{ticket.remaining_stock}</td>

                <td className="space-x-2">

                  <Link
                    href={`/admin/tickets/edit/${ticket.id}`}
                    className="rounded bg-blue-500 px-4 py-2 text-white"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(ticket.id)}
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