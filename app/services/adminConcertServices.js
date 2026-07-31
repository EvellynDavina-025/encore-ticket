import { supabase } from "@/lib/supabase";

/* ==========================
   GET ALL CONCERTS
========================== */

export async function getConcerts() {
  const { data, error } = await supabase
    .from("concerts")
    .select("*")
    .order("concert_date", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

/* ==========================
   DELETE CONCERT
========================== */

export async function deleteConcert(id) {
  const { error } = await supabase
    .from("concerts")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}

/* ==========================
   ADD CONCERT
========================== */

export async function addConcert(concert) {
  const { error } = await supabase
    .from("concerts")
    .insert([concert]);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}

export async function getConcertById(id) {
  const { data, error } = await supabase
    .from("concerts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export async function updateConcert(id, concert) {
  const { error } = await supabase
    .from("concerts")
    .update(concert)
    .eq("id", id);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}