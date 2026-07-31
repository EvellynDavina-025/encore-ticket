"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  getTicketById,
  updateTicket,
} from "@/app/services/adminTicketService";

export default function EditTicketPage() {

  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState(null);

  useEffect(() => {
    loadTicket();
  }, []);

  async function loadTicket() {
    const data = await getTicketById(id);
    setForm(data);
  }

  async function handleSubmit(e) {

    e.preventDefault();

    const success = await updateTicket(id, {
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
      remaining_stock: Number(form.remaining_stock),
    });

    if (success) {
      alert("Ticket berhasil diupdate");
      router.push("/admin/tickets");
    } else {
      alert("Gagal update ticket");
    }
  }

  if (!form) {
    return (
      <main className="p-10">
        Loading...
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Edit Ticket
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >

        <input
          className="w-full rounded-lg border p-3"
          value={form.category}
          onChange={(e)=>
            setForm({
              ...form,
              category:e.target.value
            })
          }
        />

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          value={form.price}
          onChange={(e)=>
            setForm({
              ...form,
              price:e.target.value
            })
          }
        />

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          value={form.stock}
          onChange={(e)=>
            setForm({
              ...form,
              stock:e.target.value
            })
          }
        />

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          value={form.remaining_stock}
          onChange={(e)=>
            setForm({
              ...form,
              remaining_stock:e.target.value
            })
          }
        />

        <button
          className="primary-btn w-full py-4"
        >
          Update Ticket
        </button>

      </form>

    </main>
  );

}