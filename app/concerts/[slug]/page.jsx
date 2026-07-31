import { getConcertBySlug } from "@/app/services/supabaseConcertService";
import { getTicketCategories } from "@/app/services/supabaseTicketService";

import { notFound } from "next/navigation";
import TicketCard from "@/app/components/TicketCard";
import Image from "next/image";

export default async function ConcertDetail({ params }) {
  const { slug } = await params;

  const concert = await getConcertBySlug(slug);
  console.log("Concert ID:", concert.id);
  console.log("Concert:", concert);

  if (!concert) {
    return notFound();
  }

  const ticketCategories = await getTicketCategories(concert.id);

  console.log(concert);
  console.log(ticketCategories);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <div className="grid gap-12 lg:grid-cols-2">

        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl">

          <Image
            src={concert.poster_url}
            alt={concert.title}
            fill
            className="object-cover"
          />

        </div>

        <div>

          <span className="rounded-full bg-pink-500 px-4 py-2 text-white">
            Live Concert
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            {concert.title}
          </h1>

          <p className="mt-3 text-xl text-pink-500">
            {concert.artist}
          </p>

          <div className="mt-8 space-y-3">

            <p>📅 {concert.concert_date}</p>

            <p>📍 {concert.city}</p>

            <p>🏟️ {concert.venue}</p>

          </div>

          <div className="mt-8 rounded-2xl bg-pink-100 p-6 dark:bg-slate-800">

            <p className="text-sm">
              Harga Mulai
            </p>

            <h2 className="text-4xl font-bold text-pink-600">
              Rp750.000
            </h2>

          </div>

          <button className="primary-btn mt-8 w-full py-4">
            Pesan Tiket
          </button>

        </div>

      </div>

      <section className="mt-20">

        <h2 className="text-3xl font-bold">
          Kategori Tiket
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {ticketCategories.map((ticket) => (

            <TicketCard
              key={ticket.id}
              ticket={ticket}
            />

          ))}

        </div>

      </section>

    </main>
  );
}