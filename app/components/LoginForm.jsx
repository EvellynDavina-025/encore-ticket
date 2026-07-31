"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

import { useRouter } from "next/navigation";

export default function LoginForm(){

const router=useRouter();

const [loading,setLoading]=useState(false);

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

async function handleLogin(e){

e.preventDefault();

setLoading(true);

const {data, error}=await supabase.auth.signInWithPassword({

email,

password

});

console.log("LOGIN DATA:", data);
console.log("LOGIN ERROR:", error);

if (error) {
  console.log(error);

  alert(error.message);

  setLoading(false);

  return;
}

router.push("/dashboard");

}

return(

<form
onSubmit={handleLogin}
className="space-y-5"
>

<input

type="email"

placeholder="Email"

className="w-full border rounded-lg p-3"

required

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<input

type="password"

placeholder="Password"

className="w-full border rounded-lg p-3"

required

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

<button

className="bg-purple-600 hover:bg-purple-700 text-white w-full rounded-lg p-3"

disabled={loading}

>

{loading?"Loading...":"Login"}

</button>

</form>

);

}