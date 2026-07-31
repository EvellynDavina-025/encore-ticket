import formatCurrency from "@/app/utils/formatCurrency";

export default function TicketCategoryCard({ ticket }) {
  const isSoldOut = ticket.remaining_stock === 0;
  const isLowStock = ticket.remaining_stock > 0 && ticket.remaining_stock <= 10;

  return (
    <div
      className={`relative rounded-2xl border p-5 transition-all duration-300 ${
        isSoldOut
          ? "border-gray-200 bg-gray-50 opacity-70"
          : "border-gray-100 bg-white hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50"
      }`}
    >
      {/* Sold Out Overlay */}
      {isSoldOut && (
        <div className="absolute top-4 right-4 rounded-lg bg-red-500 px-3 py-1 text-xs font-bold tracking-wider text-white shadow-sm">
          SOLD OUT
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Category Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            {/* Category Icon */}
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
              isSoldOut
                ? "bg-gray-200 text-gray-400"
                : ticket.category === "VIP"
                ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-sm shadow-amber-200"
                : ticket.category === "Festival"
                ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-sm shadow-indigo-200"
                : "bg-gradient-to-br from-sky-400 to-blue-500 text-white shadow-sm shadow-blue-200"
            }`}>
              {ticket.category === "VIP" ? "V" : ticket.category?.charAt(0) || "T"}
            </div>

            <div>
              <h3 className="text-base font-bold text-gray-900">
                {ticket.category}
              </h3>
              <div className="flex items-center gap-2">
                {isSoldOut ? (
                  <span className="text-xs text-gray-400">Tiket habis</span>
                ) : isLowStock ? (
                  <span className="flex items-center gap-1 text-xs text-orange-500">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                    </span>
                    Sisa {ticket.remaining_stock} tiket
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    Tersedia
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Price + CTA */}
        <div className="flex items-center gap-4 sm:flex-col sm:items-end">
          <p className="text-xl font-bold text-indigo-600">
            {formatCurrency(ticket.price)}
          </p>

          <button
            disabled={isSoldOut}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              isSoldOut
                ? "cursor-not-allowed bg-gray-200 text-gray-400"
                : "bg-indigo-600 text-white shadow-md shadow-indigo-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-300 active:scale-95"
            }`}
          >
            {isSoldOut ? "Habis" : "Beli Tiket"}
          </button>
        </div>
      </div>
    </div>
  );
}
