import ConcertsList from "./ConcertsList";

export const metadata = {
  title: "Concerts | Encore Ticket",
  description: "Temukan konser favoritmu dan pesan tiket dengan mudah.",
};

export default function ConcertsPage() {
  return (
    <main className="min-h-screen bg-pink-50 dark:bg-slate-950">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 py-24 text-white dark:from-blue-700 dark:via-blue-600 dark:to-indigo-700">

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            🎤 Live Concert Experience
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Explore Concerts
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">

            Temukan berbagai konser dari artis favoritmu,
            mulai dari K-Pop, Pop, Rock, hingga festival musik terbesar.
            Pesan tiket dengan cepat, aman, dan nikmati pengalaman konser terbaik bersama Encore Ticket.

          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <div className="rounded-3xl bg-white/15 px-10 py-6 backdrop-blur">

              <h2 className="text-4xl font-black">
                50+
              </h2>

              <p className="mt-2 text-sm">
                Concerts
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 px-10 py-6 backdrop-blur">

              <h2 className="text-4xl font-black">
                100+
              </h2>

              <p className="mt-2 text-sm">
                Artists
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 px-10 py-6 backdrop-blur">

              <h2 className="text-4xl font-black">
                15
              </h2>

              <p className="mt-2 text-sm">
                Cities
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">

          <div>

            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600 dark:bg-blue-900 dark:text-blue-300">
              Available Events
            </span>

            <h2 className="mt-5 text-4xl font-black">
              Upcoming Concerts
            </h2>

            <p className="mt-3 max-w-2xl text-gray-500 dark:text-gray-300">

              Pilih konser favoritmu, lihat detail acara,
              tentukan kategori tiket, dan lakukan booking hanya dalam beberapa klik.

            </p>

          </div>

        </div>

        <ConcertsList />

      </section>

    </main>
  );
}