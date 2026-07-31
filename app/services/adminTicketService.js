import { supabase } from "@/lib/supabase";

/* ===============================
   GET ALL TICKET
================================ */

export async function getConcertList() {
  const { data, error } = await supabase
    .from("concerts")
    .select("id,title")
    .order("title");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getTickets() {
  const { data, error } = await supabase
    .from("ticket_categories")
    .select(`
      *,
      concerts(title)
    `)
    .order("concert_id");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

/* ===============================
   GET TICKET BY ID
================================ */

export async function getTicketById(id) {
  const { data, error } = await supabase
    .from("ticket_categories")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

/* ===============================
   ADD
================================ */

export async function addTicket(ticket) {
  const { error } = await supabase
    .from("ticket_categories")
    .insert([ticket]);

  return !error;
}

/* ===============================
   UPDATE
================================ */

export async function updateTicket(id, ticket) {
  const { error } = await supabase
    .from("ticket_categories")
    .update(ticket)
    .eq("id", id);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}

/* ===============================
   DELETE
================================ */

export async function deleteTicket(id) {
  const { error } = await supabase
    .from("ticket_categories")
    .delete()
    .eq("id", id);

  return !error;
}