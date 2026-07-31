import { supabase } from "@/lib/supabase";

/* ==========================
   GET SEMUA KONSER
========================== */
export async function getAllConcerts() {
  const { data, error } = await supabase
    .from("concerts")
    .select("*")
    .order("concert_date", { ascending: true });

  if (error) {
    console.error("getAllConcerts:", error);
    return [];
  }

  return data;
}

/* ==========================
   GET DETAIL BERDASARKAN SLUG
========================== */
export async function getConcertBySlug(slug) {
  const { data, error } = await supabase
    .from("concerts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("getConcertBySlug:", error);
    return null;
  }

  return data;
}

/* ==========================
   GET KATEGORI TIKET
========================== */
export async function getTicketCategories(concertId) {
  const { data, error } = await supabase
    .from("ticket_categories")
    .select("*")
    .eq("concert_id", concertId)
    .order("price", { ascending: true });

  if (error) {
    console.error("getTicketCategories:", error);
    return [];
  }

  return data;
}