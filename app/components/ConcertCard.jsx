import Link from "next/link";


export default function ConcertCard({ concert }) {

return (

<div className="
rounded-2xl
overflow-hidden
border
bg-white
dark:bg-slate-900
">


<img
  src={concert.poster_url}
  alt={concert.title}
  className="h-full w-full object-cover"
/>


<div className="p-5">


<h3 className="text-xl font-bold">

{concert.title}

</h3>


<p className="mt-2 font-semibold text-pink-600">

{concert.artist}

</p>


<p className="mt-3 text-sm">

📍 {concert.city}

</p>


<p className="text-sm">

🏟 {concert.venue}

</p>


<p className="text-sm">

📅 {
new Date(
concert.concert_date
).toLocaleDateString(
"id-ID"
)
}

</p>



<Link

href={`/concerts/${concert.slug}`}

className="
block
mt-5
rounded-xl
bg-pink-600
py-3
text-center
text-white
font-semibold
"

>

Pesan Tiket

</Link>


</div>


</div>

);

}