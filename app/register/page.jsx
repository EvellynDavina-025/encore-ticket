import RegisterForm from "../components/RegisterForm";

export default function RegisterPage(){

return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100">

<div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">

<h1 className="text-3xl font-bold mb-6">

Daftar Akun

</h1>

<RegisterForm/>

</div>

</div>

);

}