"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addConcert } from "@/app/services/adminConcertService";

export default function AddConcertPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    artist: "",
    city: "",
    venue: "",
    concert_date: "",
    description: "",
    poster_url: "",
    slug: "",
    status: "ACTIVE",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const success = await addConcert(form);

    if (success) {
      alert("Concert berhasil ditambahkan.");
      router.push("/admin/concerts");
    } else {
      alert("Gagal menambahkan concert.");
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Tambah Concert
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Judul Concert"
          required
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
          placeholder="Artist"
          required
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
          placeholder="City"
          required
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
          placeholder="Venue"
          required
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
          required
          value={form.concert_date}
          onChange={(e) =>
            setForm({
              ...form,
              concert_date: e.target.value,
            })
          }
        />

        <textarea
          className="w-full rounded-lg border p-3"
          rows={5}
          placeholder="Deskripsi"
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
          placeholder="Poster URL"
          value={form.poster_url}
          onChange={(e) =>
            setForm({
              ...form,
              poster_url: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Slug"
          required
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
        />

        <button
          className="primary-btn w-full py-4"
        >
          Simpan Concert
        </button>

      </form>

    </main>
  );
}