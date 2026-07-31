"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="text-2xl font-black">
          Encore Ticket
        </Link>

        <nav className="hidden gap-8 font-medium md:flex">
          <Link href="/">Home</Link>
          <Link href="/concerts">Concert</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/about">About</Link>
          <Link href="/my-ticket">My Ticket</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-3">

          <ThemeToggle />

          {user ? (
            <>
              <span className="hidden text-sm font-medium md:block">
                {user.email}
              </span>

              <button
                onClick={handleLogout}
                className="rounded-xl bg-red-500 px-5 py-2 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-xl border px-5 py-2"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-pink-600 px-5 py-2 text-white hover:bg-pink-700"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>

    </header>
  );
}