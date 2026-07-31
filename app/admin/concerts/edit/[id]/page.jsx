"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  getConcertById,
  updateConcert,
} from "@/app/services/adminConcertService";

export default function EditConcertPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState(null);

  useEffect(() => {
    loadConcert();
  }, []);

  async function loadConcert() {
    const data = await getConcertById(id);
    setForm(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const success = await updateConcert(id, form);

    if (success) {
      alert("Concert berhasil diupdate");
      router.push("/admin/concerts");
    } else {
      alert("Gagal update concert");
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
    <main className="mx-auto max-w-4xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Edit Concert
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-5"
      >

        <input
          className="w-full rounded-lg border p-3"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          value={form.artist}
          onChange={(e) =>
            setForm({
              ...form,
              artist: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          value={form.city}
          onChange={(e) =>
            setForm({
              ...form,
              city: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          value={form.venue}
          onChange={(e) =>
            setForm({
              ...form,
              venue: e.target.value,
            })
          }
        />

        <input
          type="datetime-local"
          className="w-full rounded-lg border p-3"
          value={form.concert_date?.slice(0,16)}
          onChange={(e) =>
            setForm({
              ...form,
              concert_date: e.target.value,
            })
          }
        />

        <textarea
          rows="5"
          className="w-full rounded-lg border p-3"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          value={form.poster_url}
          onChange={(e) =>
            setForm({
              ...form,
              poster_url: e.target.value,
            })
          }
        />

        <button className="primary-btn w-full py-4">
          Update Concert
        </button>

      </form>

    </main>
  );
}