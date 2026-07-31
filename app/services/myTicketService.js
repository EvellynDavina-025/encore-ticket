import { supabase } from "@/lib/supabase";

export async function getMyBookings(userId) {
  const { data, error } = await supabase
    .from("bookings")
    .select(`
      *,
      concerts (
        id,
        title,
        artist,
        city,
        venue,
        poster_url,
        concert_date
      ),
      ticket_categories (
        category,
        price
      )
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}