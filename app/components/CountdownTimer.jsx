"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    function calc() {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, ended: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        ended: false,
      });
    }

    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="flex gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="h-16 w-16 animate-pulse rounded-xl bg-gray-200" />
            <div className="mt-2 h-3 w-10 animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>
    );
  }

  if (timeLeft.ended) {
    return (
      <div className="text-lg font-bold text-indigo-600">
        Konser sedang berlangsung!
      </div>
    );
  }

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-600 text-2xl font-bold text-white shadow-lg shadow-indigo-200 sm:h-20 sm:w-20 sm:text-3xl">
            {String(unit.value).padStart(2, "0")}
          </div>
          <span className="mt-2 text-xs font-medium text-gray-500">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
