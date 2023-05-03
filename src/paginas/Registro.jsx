import React, {useEffect} from 'react'
import {crearUsuario} from '../api/usuarios'

const Registro = (isAuthenticated) => {

    useEffect(()=>{
        if(isAuthenticated){
            // window.location.href = '/panel'
        }
    },[])

  const handleSubmit = () => {
    const usuario = {
      nombre: document.getElementById('name').value,
      email: document.getElementById('email').value,
      contraseña: document.getElementById('password').value,
      apellido: document.getElementById('surname').value,
      altura: document.getElementById('altura').value,
      peso: document.getElementById('peso').value,
      sexo: document.getElementById('sexo').value
    }
    crearUsuario(usuario)
    .then(() => {
        window.location.href = '/login'
        }
    )
  }

  const handleSubmitForm = (event) => {
  event.preventDefault();
  handleSubmit();
};

  return (
    <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col h-screen overflow-y-scroll">
            <div className="flex justify-center md:justify-start pt-4 md:pl-12 md:-mb-12">
                <a href="#" className="bg-black text-white font-bold text-xl p-4" alt="Logo">Logo</a>
            </div>
            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32 ">
                <p className="text-center text-3xl"> Bienvenido!</p>
                <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmitForm}>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="name" className="text-lg">Nombre</label>
                        <input type="text" id="name" placeholder="John" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="surname" className="text-lg">Apellido</label>
                        <input type="text" id="surname" placeholder="Smith" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="altura" className="text-lg">Altura</label>
                        <input type="number" id="altura" placeholder="175" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="peso" className="text-lg">Peso</label>
                        <input type="number" id="peso" placeholder="75" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="sexo" className="text-lg">Sexo</label>
                        <select id="sexo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="password" className="text-lg">Contraseña</label>
                        <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <input type="button" value="Registrarme" onClick={handleSubmitForm} className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                </form>
                <div className="text-center pt-12 pb-12">
                    <p>Ya tienes una cuenta? <a href="/login" className="underline font-semibold">Inicia sesion aquí.</a></p>
                </div>
            </div>
        </div>
        <div className="w-1/2 shadow-2xl">
            <img className="object-cover w-full h-screen hidden md:block" src="https://img.freepik.com/foto-gratis/joven-deportista-usando-laptop-mientras-pone-sus-zapatillas-sala-estar_637285-2994.jpg?size=626&ext=jpg&ga=GA1.2.1727115108.1682870746&semt=ais" alt="Background" />
        </div>
    </div>
  )
}

export default Registro
