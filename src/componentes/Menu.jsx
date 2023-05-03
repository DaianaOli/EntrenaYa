import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <span className="mr-1">Menú</span>
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Planes de entrenamiento
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Programas de nutrición
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Ver ejercicios populares
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Panel de usuario
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Ayuda y soporte
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
