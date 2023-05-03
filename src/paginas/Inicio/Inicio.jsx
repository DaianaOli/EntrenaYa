import { Link } from "react-router-dom";
import Menu from "../../componentes/Menu";

const Inicio = () => {
  return (
    <div className="bg-gray-100">
    <Menu/>
      {/* Sección de planes de entrenamiento */}
      <section className="py-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Planes de entrenamiento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Plan principiante */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/500x300" alt="Plan principiante" className="w-full h-64 object-cover" />
              <div className="px-6 py-4">
                <h3 className="text-xl font-bold mb-2">Principiante</h3>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis augue auctor, tincidunt lectus ac, ullamcorper felis.</p>
              </div>
              <Link to="/plan-principiante" className="block bg-gray-900 text-white text-center py-3 hover:bg-gray-800 transition duration-300">Ver plan</Link>
            </div>

            {/* Plan intermedio */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/500x300" alt="Plan intermedio" className="w-full h-64 object-cover" />
              <div className="px-6 py-4">
                <h3 className="text-xl font-bold mb-2">Intermedio</h3>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis augue auctor, tincidunt lectus ac, ullamcorper felis.</p>
              </div>
              <Link to="/plan-intermedio" className="block bg-gray-900 text-white text-center py-3 hover:bg-gray-800 transition duration-300">Ver plan</Link>
            </div>

            {/* Plan avanzado */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/500x300" alt="Plan avanzado" className="w-full h-64 object-cover" />
              <div className="px-6 py-4">
                <h3 className="text-xl font-bold mb-2">Avanzado</h3>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis augue auctor, tincidunt lectus ac, ullamcorper felis.</p>
              </div>
              <Link to="/plan-avanzado" className="block bg-gray-900 text-white text-center py-3 hover:bg-gray-800 transition duration-300">Ver plan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de programas de nutrición */}
      <section className="py-12 px-4 md:px-0 bg-gray-200">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Programas de nutrición</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* {/* Programa bajar de peso */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/500x300" alt="Programa bajar de peso" className="w-full h-64 object-cover" />
                    <div className="px-6 py-4">
                        <h3 className="text-xl font-bold mb-2">Bajar de peso</h3>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis augue auctor, tincidunt lectus ac, ullamcorper felis.</p>
                    </div>
                    <Link to="/programa-bajar-de-peso" className="block bg-gray-900 text-white text-center py-3 hover:bg-gray-800 transition duration-300">Ver programa</Link>
                </div>
                {/* {/* Programa ganar masa muscular */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/500x300" alt="Programa ganar masa muscular" className="w-full h-64 object-cover" />
                    <div className="px-6 py-4">
                        <h3 className="text-xl font-bold mb-2">Ganar masa muscular</h3>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis augue auctor, tincidunt lectus ac, ullamcorper felis.</p>
                    </div>
                    <Link to="/programa-ganar-masa-muscular" className="block bg-gray-900 text-white text-center py-3 hover:bg-gray-800 transition duration-300">Ver programa</Link>
                </div>
                {/* {/* Programa mantenimiento */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/500x300" alt="Programa mantenimiento" className="w-full h-64 object-cover" />
                    <div className="px-6 py-4">
                        <h3 className="text-xl font-bold mb-2">Mantenimiento</h3>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis augue auctor, tincidunt lectus ac, ullamcorper felis.</p>
                    </div>
                    <Link to="/programa-mantenimiento" className="block bg-gray-900 text-white text-center py-3 hover:bg-gray-800 transition duration-300">Ver programa</Link>
                </div>
            </div>
        </div>
        </section>
        <footer className="bg-white text-white text-center py-4">
            <p className="text-gray-700">Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
        </footer>
    </div>
    )
}

export default Inicio
