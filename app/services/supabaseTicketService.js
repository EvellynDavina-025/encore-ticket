import { supabase } from "@/lib/supabase";

export async function getTicketCategories(concertId) {

  console.log("Searching concert_id =", concertId);

  const { data, error } = await supabase
    .from("ticket_categories")
    .select("*")
    .eq("concert_id", concertId);

  console.log("Ticket Data:", data);
  console.log("Ticket Error:", error);

  if (error) return [];

  return data;
}