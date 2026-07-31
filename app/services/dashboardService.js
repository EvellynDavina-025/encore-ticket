import { supabase } from "@/lib/supabase";

export async function getDashboardStats() {
  const [
    concerts,
    bookings,
    users,
    revenue,
  ] = await Promise.all([
    supabase.from("concerts").select("*", { count: "exact", head: true }),
    supabase.from("bookings").select("*", { count: "exact", head: true }),
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("bookings").select("total_price"),
  ]);

  const totalRevenue =
    revenue.data?.reduce(
      (sum, item) => sum + Number(item.total_price),
      0
    ) || 0;

  return {
    totalConcerts: concerts.count ?? 0,
    totalBookings: bookings.count ?? 0,
    totalUsers: users.count ?? 0,
    totalRevenue,
  };
}