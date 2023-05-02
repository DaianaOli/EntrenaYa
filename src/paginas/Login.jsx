import { useEffect } from "react";
import { iniciarSesion } from "../api/usuarios";

const Login = ({isAuthenticated}) => {

    useEffect(()=>{
        if(isAuthenticated){
            // window.location.href = '/panel'
        }
    },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const submitForm = () => {
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;
    const usuario = { email, contraseña };
    console.log(usuario);
    iniciarSesion(usuario)
  };

  return (
    <div className="w-full flex flex-wrap">
      {/* <!-- Login Section --> */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a href="#" className="bg-black text-white font-bold text-xl p-4">
            Logo
          </a>
        </div>
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="contraseña" className="text-lg">
                Password
              </label>
              <input
                type="password"
                id="contraseña"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            >
              Log In
            </button>
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Don't have an account?{" "}
              <a href="/" className="underline font-semibold">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>
      
    

    {/* <!-- Image Section --> */}
    <div className="w-1/2 shadow-2xl">
        <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
        />
    </div>
</div>
);
};

export default Login;