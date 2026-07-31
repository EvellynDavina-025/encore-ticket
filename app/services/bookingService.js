import { supabase } from "@/lib/supabase";

export async function createBooking({
  userId,
  concertId,
  ticketId,
  quantity,
  total,
}) {
  // Ambil data tiket
  const { data: ticket, error: ticketError } = await supabase
    .from("ticket_categories")
    .select("*")
    .eq("id", ticketId)
    .single();

  if (ticketError) {
    return {
      success: false,
      error: ticketError,
    };
  }

  // Validasi stok
  if (ticket.remaining_stock < quantity) {
    return {
      success: false,
      error: {
        message: "Stok tiket tidak mencukupi.",
      },
    };
  }

  // Generate Booking Code
  const bookingCode =
    "ENC-" + Date.now().toString().slice(-8);

  // Simpan booking
  const { data: booking, error: bookingError } = await supabase
    .from("bookings")
    .insert([
      {
        user_id: userId,
        concert_id: Number(concertId),
        ticket_category_id: Number(ticketId),
        quantity,
        total_price: total,
        booking_code: bookingCode,
        status: "PAID",
      },
    ])
    .select()
    .single();

  if (bookingError) {
    return {
      success: false,
      error: bookingError,
    };
  }

  // Update stok
  const { error: stockError } = await supabase
    .from("ticket_categories")
    .update({
      remaining_stock: ticket.remaining_stock - quantity,
    })
    .eq("id", ticketId);

  if (stockError) {
    return {
      success: false,
      error: stockError,
    };
  }

  return {
    success: true,
    booking,
  };
}