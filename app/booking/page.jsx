"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import QuantitySelector from "@/app/components/QuantitySelector";
import BookingSummary from "@/app/components/BookingSummary";

export default function BookingPage() {

  const searchParams = useSearchParams();

  const concertId = searchParams.get("concert");
  const ticketId = searchParams.get("ticket");
  const category = searchParams.get("category");
  const price = Number(searchParams.get("price"));

  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => {
    return price * quantity;
  }, [price, quantity]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Booking Tiket
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-300">
          Periksa kembali pesananmu sebelum melakukan checkout.
        </p>

      </div>

      <div className="grid gap-10 lg:grid-cols-2">

        {/* LEFT */}

        <div className="card p-8">

          <h2 className="text-2xl font-bold">
            Detail Tiket
          </h2>

          <div className="mt-8 space-y-6">

            <div>

              <p className="text-sm text-gray-500">
                Kategori
              </p>

              <h3 className="mt-1 text-xl font-bold">
                {category}
              </h3>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Harga
              </p>

              <h3 className="mt-1 text-2xl font-bold text-pink-600 dark:text-blue-400">
                Rp {price.toLocaleString("id-ID")}
              </h3>

            </div>

            <QuantitySelector

              quantity={quantity}

              setQuantity={setQuantity}

            />

          </div>

        </div>

        {/* RIGHT */}

        <BookingSummary

          concertId={concertId}

          ticketId={ticketId}

          category={category}

          quantity={quantity}

          total={total}

          price={price}

        />

      </div>

    </main>
  );
}