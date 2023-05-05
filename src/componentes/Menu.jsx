import { useState } from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineLogout, HiOutlineUserCircle, HiOutlineChartBar, HiOutlineClock } from 'react-icons/hi';

const Menu = () => {
  const [abierto, setAbierto] = useState(false); // Usamos el estado para controlar si el menú está abierto o cerrado
  const idUsuario = localStorage.getItem('id'); // Obtenemos el id del usuario del localStorage
console.log(idUsuario,"id")
  const toggleMenu = () => {
    setAbierto(!abierto); // Invertimos el estado del menú
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="text-gray-600 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        onClick={toggleMenu}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          {abierto ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414 0L12 11.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm16 6a1 1 0 0 0-1-1H5a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1zm-1 4a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V17a1 1 0 0 0-1-1z"
            />
          )}
        </svg>
      </button>

      {/* El menú desplegable se muestra aquí */}
      {abierto && (
        <div className="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          <Link
            to={`/panel/${idUsuario}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={toggleMenu}
          >
            <div className="flex items-center">
              <HiOutlineUserCircle className="mr-2" />
              Configuración de la cuenta
            </div>
          </Link>
          <Link
            to={`/progreso/${idUsuario}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={toggleMenu}
          >
            <div className="flex items-center">
              <HiOutlineChartBar className="mr-2" />
              Progreso
            </div>
          </Link>
          <Link
            to={`/historial/${idUsuario}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={toggleMenu}
          >
            <div className="flex items-center">
              <HiOutlineClock className="mr-2" />
              Historial
            </div>
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={toggleMenu}
          >
            <div className="flex items-center">
              <HiOutlineLogout className="mr-2" />
              Cerrar sesión
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

