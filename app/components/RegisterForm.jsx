"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

const router = useRouter();

const [loading,setLoading]=useState(false);

const [form,setForm]=useState({

full_name:"",
email:"",
password:""

});

async function handleSubmit(e){

e.preventDefault();

setLoading(true);

const {data,error}=await supabase.auth.signUp({

email:form.email,

password:form.password,

options:{
data:{
full_name:form.full_name
}
}

});

if(error){

alert(error.message);

setLoading(false);

return;

}

alert("Akun berhasil dibuat. Silakan login.");

router.push("/login");

}

return(

<form
onSubmit={handleSubmit}
className="space-y-5"
>

<input

placeholder="Nama Lengkap"

className="w-full border rounded-lg p-3"

required

value={form.full_name}

onChange={(e)=>setForm({...form,full_name:e.target.value})}

/>

<input

type="email"

placeholder="Email"

className="w-full border rounded-lg p-3"

required

value={form.email}

onChange={(e)=>setForm({...form,email:e.target.value})}

/>

<input

type="password"

placeholder="Password"

className="w-full border rounded-lg p-3"

required

minLength={8}

value={form.password}

onChange={(e)=>setForm({...form,password:e.target.value})}

/>

<button

className="bg-pink-500 hover:bg-pink-600 text-white w-full rounded-lg p-3"

disabled={loading}

>

{loading?"Loading...":"Daftar"}

</button>

</form>

);

}