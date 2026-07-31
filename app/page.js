"use client";

import { useEffect, useState } from "react";

import HeroSection from "./components/HeroSection";
import ConcertCard from "./components/ConcertCard";
import ConcertFilter from "./components/ConcertFilter";

import { getAllConcerts } from "./services/supabaseConcertService";


export default function Home() {

  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search & Filter
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");


  useEffect(() => {

    let mounted = true;

    async function loadConcerts() {

      try {

        const data = await getAllConcerts();

        if (mounted) {
          setConcerts(data || []);
        }


      } catch (err) {

        console.error(
          "Gagal mengambil data konser:",
          err
        );

        if (mounted) {
          setError(
            "Data konser gagal dimuat."
          );
        }

      } finally {

        if (mounted) {
          setLoading(false);
        }

      }

    }


    loadConcerts();


    return () => {
      mounted = false;
    };

  }, []);



  // Filter Concert

  const filteredConcerts = concerts.filter((concert) => {


    const keyword =
      search.toLowerCase().trim();


    const matchSearch =
      !keyword ||
      concert.title
        ?.toLowerCase()
        .includes(keyword) ||
      concert.artist
        ?.toLowerCase()
        .includes(keyword);



    const matchCity =
      city === "" ||
      concert.city === city;



    return matchSearch && matchCity;

  });



  return (

    <main>


      <HeroSection />


      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">


        {/* Filter */}

        <ConcertFilter

          search={search}
          setSearch={setSearch}

          city={city}
          setCity={setCity}

        />



        {/* Header */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">


          <div>


            <span className="text-sm font-semibold uppercase tracking-wider text-pink-600 dark:text-blue-400">

              Jangan Ketinggalan

            </span>


            <h2 className="mt-2 text-3xl font-bold">

              Konser Mendatang

            </h2>


            <p className="mt-2 text-gray-500 dark:text-gray-300">

              Temukan event terbaik dan pesan tiketmu sekarang.

            </p>


          </div>



          <a

            href="/concerts"

            aria-label="Lihat semua konser"

            className="inline-flex items-center gap-1 text-sm font-semibold text-pink-600 hover:text-pink-700 dark:text-blue-400"

          >

            Lihat Semua →

          </a>


        </div>





        {/* Error */}

        {error && (

          <div className="mt-10 rounded-xl bg-red-100 p-5 text-center text-red-600">

            {error}

          </div>

        )}





        {/* Loading */}

        {loading && (

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {[1,2,3].map((item)=>(

              <div

                key={item}

                className="overflow-hidden rounded-2xl border bg-white dark:bg-slate-900"

              >


                <div className="aspect-[3/4] animate-pulse bg-gray-200 dark:bg-slate-700" />


                <div className="space-y-3 p-5">


                  <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-slate-700"/>


                  <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100 dark:bg-slate-600"/>


                  <div className="h-3 w-full animate-pulse rounded bg-gray-100 dark:bg-slate-600"/>


                </div>


              </div>

            ))}


          </div>

        )}






        {/* Concert List */}

        {!loading && !error && (

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {filteredConcerts.map((concert)=>(


              <ConcertCard

                key={concert.id}

                concert={concert}

              />


            ))}


          </div>

        )}






        {/* Empty State */}

        {!loading &&

        !error &&

        filteredConcerts.length === 0 && (


          <div className="mt-16 text-center">


            <h3 className="text-2xl font-bold">

              Tidak ada konser ditemukan

            </h3>


            <p className="mt-3 text-gray-500 dark:text-gray-400">

              Coba gunakan kata kunci atau filter yang berbeda.

            </p>


          </div>


        )}



      </section>






      {/* Why Encore Ticket */}


      <section className="border-t border-gray-200 bg-gray-50 dark:border-slate-800 dark:bg-slate-950">


        <div className="mx-auto max-w-7xl px-4 py-20">


          <div className="text-center">


            <span className="text-sm font-semibold uppercase tracking-wider text-pink-600 dark:text-blue-400">

              Mengapa Encore Ticket?

            </span>



            <h2 className="mt-3 text-3xl font-bold">

              Beli Tiket dengan Mudah & Aman

            </h2>


          </div>





          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">


            <FeatureCard

              emoji="⚡"

              title="Cepat & Praktis"

              description="Pesan tiket hanya dalam beberapa klik tanpa antre."

            />


            <FeatureCard

              emoji="🛡️"

              title="100% Aman"

              description="Transaksi aman dengan sistem keamanan modern."

            />


            <FeatureCard

              emoji="🎫"

              title="Realtime"

              description="Update ketersediaan tiket secara langsung."

            />


          </div>


        </div>


      </section>


    </main>

  );

}






function FeatureCard({

  emoji,

  title,

  description

}) {


  return (

    <div className="card p-8 text-center">


      <div className="text-5xl">

        {emoji}

      </div>


      <h3 className="mt-5 text-xl font-bold">

        {title}

      </h3>


      <p className="mt-3 text-gray-500 dark:text-gray-300">

        {description}

      </p>


    </div>

  );

}