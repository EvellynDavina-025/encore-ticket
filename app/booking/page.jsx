import { Suspense } from "react";
import BookingContent from "./BookingContent";


export default function BookingPage() {

  return (

    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center">
          <p className="text-gray-500">
            Memuat halaman booking...
          </p>
        </main>
      }
    >

      <BookingContent />

    </Suspense>

  );

}