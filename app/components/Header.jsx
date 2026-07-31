"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const menus = [
  { name: "Beranda", href: "/" },
  { name: "Konser", href: "/concerts" },
  { name: "Tentang", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On homepage, header is transparent at top and solid on scroll
  const headerBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm";

  const textColor = isHome && !scrolled
    ? "text-white"
    : "text-gray-900";

  const logoColor = isHome && !scrolled
    ? "text-white"
    : "text-indigo-600";

  const linkColor = isHome && !scrolled
    ? "text-white/80 hover:text-white"
    : "text-gray-600 hover:text-indigo-600";

  const activeLinkColor = isHome && !scrolled
    ? "text-white"
    : "text-indigo-600";

  const searchBg = isHome && !scrolled
    ? "bg-white/15 border-white/20 text-white placeholder-white/60 focus:bg-white/25"
    : "bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-indigo-500";

  const authBtnOutline = isHome && !scrolled
    ? "border-white/30 text-white hover:bg-white/10"
    : "border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600";

  const authBtnSolid = isHome && !scrolled
    ? "bg-white text-indigo-700 hover:bg-white/90"
    : "bg-indigo-600 text-white hover:bg-indigo-700";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl font-bold text-white ${isHome && !scrolled ? "bg-white/20" : "bg-indigo-600"}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <span className={`text-xl font-bold tracking-tight ${logoColor}`}>
            Encore
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-1 md:flex">
          {menus.map((menu) => {
            const active = pathname === menu.href;
            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? `${activeLinkColor} bg-indigo-50/80`
                    : `${linkColor}`
                }`}
              >
                {menu.name}
              </Link>
            );
          })}
        </div>

        {/* Right side: Search + Auth */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari konser..."
              className={`w-48 rounded-xl border py-2 pl-9 pr-4 text-sm outline-none transition-all duration-200 focus:w-64 focus:ring-2 ${searchBg}`}
            />
          </div>

          {/* Auth Buttons */}
          <Link
            href="/login"
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 ${authBtnOutline}`}
          >
            Masuk
          </Link>
          <Link
            href="/login"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${authBtnSolid}`}
          >
            Daftar
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex items-center justify-center rounded-lg p-2 transition-colors md:hidden ${textColor} hover:bg-black/5`}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`animate-slide-down border-t md:hidden ${isHome && !scrolled ? "bg-black/40 backdrop-blur-lg border-white/10" : "bg-white border-gray-100"}`}>
          <div className="space-y-1 px-4 py-4">
            {menus.map((menu) => {
              const active = pathname === menu.href;
              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    active
                      ? `bg-indigo-50 ${isHome && !scrolled ? "text-white" : "text-indigo-600"}`
                      : `${linkColor}`
                  }`}
                >
                  {menu.name}
                </Link>
              );
            })}
            <div className={`my-3 border-t ${isHome && !scrolled ? "border-white/10" : "border-gray-100"}`} />
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium ${linkColor}`}
            >
              Masuk
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Daftar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
