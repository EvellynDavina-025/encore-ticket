"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  addTicket,
  getConcertList,
} from "@/app/services/adminTicketService";

export default function AddTicketPage() {
  const router = useRouter();

  const [concerts, setConcerts] = useState([]);

  const [form, setForm] = useState({
    concert_id: "",
    category: "",
    price: "",
    stock: "",
    remaining_stock: "",
  });

  useEffect(() => {
    loadConcerts();
  }, []);

  async function loadConcerts() {
    const data = await getConcertList();
    setConcerts(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const success = await addTicket({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      remaining_stock: Number(form.stock),
    });

    if (success) {
      alert("Ticket berhasil ditambahkan");
      router.push("/admin/tickets");
    } else {
      alert("Gagal menambahkan ticket");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Tambah Ticket
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >

        <select
          className="w-full rounded-lg border p-3"
          required
          value={form.concert_id}
          onChange={(e) =>
            setForm({
              ...form,
              concert_id: Number(e.target.value),
            })
          }
        >
          <option value="">
            Pilih Concert
          </option>

          {concerts.map((concert) => (
            <option
              key={concert.id}
              value={concert.id}
            >
              {concert.title}
            </option>
          ))}
        </select>

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Kategori"
          required
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        />

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          placeholder="Harga"
          required
          value={form.price}
          onChange={(e) =>
            setForm({
              ...form,
              price: e.target.value,
            })
          }
        />

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          placeholder="Stock"
          required
          value={form.stock}
          onChange={(e) =>
            setForm({
              ...form,
              stock: e.target.value,
            })
          }
        />

        <button
          className="primary-btn w-full py-4"
        >
          Simpan Ticket
        </button>

      </form>

    </main>
  );
}