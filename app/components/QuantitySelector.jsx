"use client";

export default function QuantitySelector({
  quantity,
  setQuantity,
}) {

  function increase() {
    setQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="mt-6">

      <p className="mb-3 text-sm text-gray-500">
        Jumlah Tiket
      </p>

      <div className="flex items-center gap-4">

        <button
          onClick={decrease}
          className="h-12 w-12 rounded-xl bg-gray-200 text-xl font-bold hover:bg-gray-300 dark:bg-slate-700"
        >
          -
        </button>

        <span className="text-2xl font-bold">
          {quantity}
        </span>

        <button
          onClick={increase}
          className="h-12 w-12 rounded-xl bg-pink-500 text-xl font-bold text-white hover:bg-pink-600 dark:bg-blue-600"
        >
          +
        </button>

      </div>

    </div>
  );
}