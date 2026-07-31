import concerts from "@/data/concerts";

export function getAllConcerts() {
  return concerts;
}

export function getConcertBySlug(slug) {
  return concerts.find((concert) => concert.slug === slug);
}

export function searchConcerts(keyword) {
  if (!keyword.trim()) {
    return concerts;
  }

  const query = keyword.toLowerCase();

  return concerts.filter((concert) =>
    concert.title.toLowerCase().includes(query) ||
    concert.artist.toLowerCase().includes(query) ||
    concert.venue.toLowerCase().includes(query)
  );
}