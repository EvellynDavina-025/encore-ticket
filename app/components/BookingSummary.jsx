"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { createBooking } from "@/app/services/bookingService";

export default function BookingSummary({
  concertId,
  ticketId,
  category,
  price,
  quantity,
  total,
}) {
  const router = useRouter();

  async function handleBooking() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Silakan login terlebih dahulu.");
        router.push("/login");
        return;
      }

      const result = await createBooking({
        userId: user.id,
        concertId,
        ticketId,
        quantity,
        total,
      });

      if (!result.success) {
        alert(result.error.message || "Booking gagal.");
        return;
      }

      alert(
        `Booking berhasil!\n\nKode Booking: ${result.booking.booking_code}`
      );

      router.push("/my-ticket");
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan.");
    }
  }

  return (
    <div className="card p-8">

      <h2 className="text-2xl font-bold">
        Ringkasan Pesanan
      </h2>

      <div className="mt-8 space-y-5">

        <div className="flex justify-between">
          <span>Kategori</span>
          <span className="font-semibold">
            {category}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Harga</span>
          <span className="font-semibold">
            Rp {price.toLocaleString("id-ID")}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Jumlah</span>
          <span className="font-semibold">
            {quantity}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>

          <span className="text-pink-600 dark:text-blue-400">
            Rp {total.toLocaleString("id-ID")}
          </span>
        </div>

      </div>

      <button
        onClick={handleBooking}
        className="mt-8 w-full rounded-xl bg-pink-600 py-4 text-lg font-semibold text-white transition hover:bg-pink-700 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Pesan Sekarang
      </button>

    </div>
  );
}