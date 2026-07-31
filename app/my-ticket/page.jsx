"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import { getMyBookings } from "@/app/services/myTicketService";

import TicketHistoryCard from "@/app/components/TicketHistoryCard";

export default function MyTicketPage() {

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadBookings();

  }, []);

  async function loadBookings() {

    const {

      data: { user },

    } = await supabase.auth.getUser();

    if (!user) {

      setLoading(false);

      return;

    }

    const data = await getMyBookings(user.id);

    setBookings(data);

    setLoading(false);

  }

  if (loading) {

    return (

      <main className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="text-4xl font-bold">

          My Tickets

        </h1>

        <p className="mt-6">

          Loading...

        </p>

      </main>

    );

  }

  return (

    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="text-4xl font-bold">

        My Tickets

      </h1>

      {bookings.length === 0 ? (

        <div className="mt-10 rounded-xl border border-dashed p-10 text-center">

          Belum ada tiket yang dipesan.

        </div>

      ) : (

        <div className="mt-10 space-y-8">

          {bookings.map((booking) => (

            <TicketHistoryCard

              key={booking.id}

              booking={booking}

            />

          ))}

        </div>

      )}

    </main>

  );

}