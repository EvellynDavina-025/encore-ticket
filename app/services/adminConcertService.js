import { supabase } from "@/lib/supabase";


// GET semua konser untuk admin
export async function getConcerts() {

  const { data, error } = await supabase
    .from("concerts")
    .select("*")
    .order("created_at", {
      ascending: false,
    });


  if (error) {
    console.error(
      "GET CONCERT ERROR:",
      error.message
    );

    throw error;
  }


  return data || [];

}



// GET konser berdasarkan ID
export async function getConcertById(id) {

  const { data, error } = await supabase
    .from("concerts")
    .select("*")
    .eq("id", id)
    .single();


  if (error) {

    console.error(
      "GET BY ID ERROR:",
      error.message
    );

    throw error;

  }


  return data;

}



// ADD konser
export async function addConcert(concertData) {

  const { data, error } = await supabase
    .from("concerts")
    .insert([
      concertData
    ])
    .select()
    .single();



  if (error) {

    console.error(
      "ADD CONCERT ERROR:",
      error.message
    );

    throw error;

  }


  return data;

}



// UPDATE konser
export async function updateConcert(
  id,
  concertData
) {


  const { data, error } = await supabase
    .from("concerts")
    .update(concertData)
    .eq("id", id)
    .select()
    .single();



  if(error){

    console.error(
      "UPDATE ERROR:",
      error.message
    );

    throw error;

  }


  return data;

}



// DELETE konser
export async function deleteConcert(id) {


  const { error } = await supabase
    .from("concerts")
    .delete()
    .eq(
      "id",
      id
    );


  if(error){

    console.error(
      "DELETE ERROR:",
      error.message
    );

    throw error;

  }


  return true;

}