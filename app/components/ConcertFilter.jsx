"use client";

export default function ConcertFilter({
  search,
  setSearch,
  city,
  setCity,
}) {
  return (
    <div className="card mb-10 p-6">

      <div className="grid gap-4 md:grid-cols-2">

        <input
          type="text"
          placeholder="🔍 Cari konser atau artis..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-900"
        />

        <select
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          className="rounded-xl border p-3 dark:bg-slate-900"
        >
          <option value="">Semua Kota</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
          <option value="Surabaya">Surabaya</option>
          <option value="Bali">Bali</option>
        </select>

      </div>

    </div>
  );
}