"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  }

  return (
    <div className="relative">
      <svg
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="Cari konser, artis, atau venue..."
        value={query}
        onChange={handleChange}
        className="w-full rounded-2xl border border-white/20 bg-white/15 py-4 pl-12 pr-6 text-white shadow-xl backdrop-blur-sm outline-none transition-all duration-200 placeholder:text-white/50 focus:border-white/40 focus:bg-white/25 focus:ring-2 focus:ring-white/20"
      />
    </div>
  );
}
