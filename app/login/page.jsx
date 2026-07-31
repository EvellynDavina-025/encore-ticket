import LoginForm from "../components/LoginForm";

export default function LoginPage(){

return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">

<div className="bg-slate-900 rounded-xl shadow-xl p-8 w-full max-w-md text-white">

<h1 className="text-3xl font-bold mb-6">

Masuk

</h1>

<LoginForm/>

</div>

</div>

);

}