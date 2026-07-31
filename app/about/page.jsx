import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 dark:bg-slate-950 dark:text-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 py-24 text-white dark:from-blue-700 dark:via-blue-600 dark:to-indigo-700">

        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            🎫 Modern Concert Ticketing Platform
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Encore Ticket
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">

            Encore Ticket merupakan platform pemesanan tiket konser modern
            yang dirancang untuk memberikan pengalaman pembelian tiket
            secara cepat, aman, dan nyaman.

            Temukan konser favoritmu,
            pilih kategori tiket,
            lakukan booking,
            dan simpan e-ticket digital dengan QR Code.

          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <div className="rounded-3xl bg-white/15 px-10 py-7 backdrop-blur">

              <h2 className="text-5xl font-black">
                50+
              </h2>

              <p className="mt-3 opacity-90">
                Concert Events
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 px-10 py-7 backdrop-blur">

              <h2 className="text-5xl font-black">
                10K+
              </h2>

              <p className="mt-3 opacity-90">
                Tickets Sold
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 px-10 py-7 backdrop-blur">

              <h2 className="text-5xl font-black">
                100%
              </h2>

              <p className="mt-3 opacity-90">
                Secure Booking
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 px-10 py-7 backdrop-blur">

              <h2 className="text-5xl font-black">
                24/7
              </h2>

              <p className="mt-3 opacity-90">
                Customer Support
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MISSION ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-pink-100 px-4 py-2 font-semibold text-pink-600 dark:bg-blue-900 dark:text-blue-300">
              About Encore Ticket
            </span>

            <h2 className="mt-6 text-4xl font-black">
              Bringing Fans Closer to Their Favorite Artists
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300">

              Encore Ticket hadir untuk membantu para pecinta musik
              mendapatkan tiket konser dengan lebih mudah,
              cepat,
              dan aman.

            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">

              Kami percaya bahwa pengalaman membeli tiket
              harus semudah menikmati konser itu sendiri.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

              <div className="text-5xl">
                🎤
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Live Concert
              </h3>

              <p className="mt-3 text-gray-500">
                Thousands of music events every year.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

              <div className="text-5xl">
                🎫
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Online Booking
              </h3>

              <p className="mt-3 text-gray-500">
                Book tickets anytime anywhere.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

              <div className="text-5xl">
                📷
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                QR Ticket
              </h3>

              <p className="mt-3 text-gray-500">
                Fast check-in with digital QR Code.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

              <div className="text-5xl">
                🔐
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Secure Payment
              </h3>

              <p className="mt-3 text-gray-500">
                Safe booking powered by Supabase.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= FEATURES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <span className="rounded-full bg-pink-100 px-4 py-2 font-semibold text-pink-600 dark:bg-blue-900 dark:text-blue-300">
            Our Features
          </span>

          <h2 className="mt-6 text-4xl font-black">
            Everything You Need
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500 dark:text-gray-300">
            Encore Ticket menghadirkan berbagai fitur modern untuk memberikan
            pengalaman pemesanan tiket konser yang aman, cepat, dan nyaman.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <FeatureCard
            icon="🎫"
            title="Online Ticket Booking"
            description="Pesan tiket konser favoritmu kapan saja tanpa harus antre."
          />

          <FeatureCard
            icon="📱"
            title="Responsive Design"
            description="Tampilan nyaman di desktop, tablet, maupun smartphone."
          />

          <FeatureCard
            icon="🔐"
            title="Secure Authentication"
            description="Login aman menggunakan Supabase Authentication."
          />

          <FeatureCard
            icon="📷"
            title="QR Code Ticket"
            description="Setiap tiket memiliki QR Code digital untuk proses check-in."
          />

          <FeatureCard
            icon="🌙"
            title="Dark Mode"
            description="Nikmati tampilan yang nyaman di siang maupun malam hari."
          />

          <FeatureCard
            icon="⚡"
            title="Realtime Database"
            description="Data konser, tiket, dan booking selalu diperbarui secara realtime."
          />

        </div>

      </section>

      {/* ================= TECHNOLOGY ================= */}

      <section className="bg-white py-24 dark:bg-slate-900">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-pink-100 px-4 py-2 font-semibold text-pink-600 dark:bg-blue-900 dark:text-blue-300">
              Technology
            </span>

            <h2 className="mt-6 text-4xl font-black">
              Built With Modern Technology
            </h2>

          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <TechCard
              emoji="⚛️"
              title="React"
              desc="Reusable Component"
            />

            <TechCard
              emoji="▲"
              title="Next.js"
              desc="Fast Framework"
            />

            <TechCard
              emoji="🎨"
              title="Tailwind CSS"
              desc="Modern UI"
            />

            <TechCard
              emoji="🗄️"
              title="Supabase"
              desc="Authentication & Database"
            />

          </div>

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-pink-100 px-4 py-2 font-semibold text-pink-600 dark:bg-blue-900 dark:text-blue-300">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Enjoy Every Concert
              Without Hassle
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Encore Ticket dirancang untuk memberikan pengalaman membeli tiket
              konser yang modern, aman, dan cepat. Semua proses dilakukan secara
              online sehingga pengguna dapat fokus menikmati konser favoritnya.
            </p>

          </div>

          <div className="grid gap-6">

            <div className="rounded-3xl border border-pink-100 bg-white p-7 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-2xl font-bold">
                🚀 Fast Booking
              </h3>

              <p className="mt-3 text-gray-500">
                Pemesanan tiket hanya membutuhkan beberapa langkah sederhana.
              </p>
            </div>

            <div className="rounded-3xl border border-pink-100 bg-white p-7 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-2xl font-bold">
                🔒 Secure System
              </h3>

              <p className="mt-3 text-gray-500">
                Seluruh data pengguna tersimpan dengan aman menggunakan Supabase.
              </p>
            </div>

            <div className="rounded-3xl border border-pink-100 bg-white p-7 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-2xl font-bold">
                🎵 Best Experience
              </h3>

              <p className="mt-3 text-gray-500">
                Temukan konser terbaru dan nikmati pengalaman membeli tiket yang mudah.
              </p>
            </div>

          </div>

        </div>

      </section>
            {/* ================= CTA ================= */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 px-10 py-20 text-center text-white shadow-2xl dark:from-blue-700 dark:via-blue-600 dark:to-indigo-700">

          <h2 className="text-5xl font-black">
            Ready for Your Next Concert?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg opacity-90">
            Temukan konser impianmu, pilih kategori tiket terbaik,
            dan nikmati pengalaman konser yang lebih mudah bersama Encore Ticket.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/concerts"
              className="rounded-2xl bg-white px-8 py-4 font-bold text-pink-600 transition hover:scale-105"
            >
              Explore Concert
            </Link>

            <Link
              href="/register"
              className="rounded-2xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-pink-600"
            >
              Join Now
            </Link>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-pink-100 bg-white py-12 dark:border-slate-800 dark:bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h3 className="text-3xl font-black">
            Encore Ticket
          </h3>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Modern Concert Ticketing Platform
          </p>

          <p className="mt-8 text-sm text-gray-400">
            Built with ❤️ using Next.js, React, Tailwind CSS & Supabase
          </p>

          <p className="mt-2 text-sm text-gray-400">
            © 2026 Encore Ticket. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}

/* ================= COMPONENT ================= */

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-3xl dark:bg-blue-900">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-500 dark:text-gray-300">
        {description}
      </p>

    </div>
  );
}

function TechCard({ emoji, title, desc }) {
  return (
    <div className="rounded-3xl border border-pink-100 bg-pink-50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

      <div className="text-5xl">
        {emoji}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-500 dark:text-gray-300">
        {desc}
      </p>

    </div>
  );
}