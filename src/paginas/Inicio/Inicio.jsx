import { Link } from "react-router-dom";
import Menu from "../../componentes/Menu";
import Footer from "../../paginas/Footer";

const Inicio = () => {
  return (
    <div className="bg-gray-100 flex flex-col">
      <div className="flex items-center justify-between p-4">
        <p className="text-4xl font-bold mb-8 text-teal-400">Logo</p>
        <Menu />
      </div>
      <section className="bg-fondo bg-center bg-cover bg-no-repeat w-full h-64 text-white"></section>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-teal-400">
          Bienvenido a mi sitio web
        </h2>
        <p className="text-lg mb-8">
          Este es un sitio web dedicado a la salud y el fitness, donde puedes
          encontrar entrenamientos y programas de nutrición diseñados para ti.
          Navega por nuestro sitio para encontrar los mejores programas de
          entrenamiento y nutrición, así como información útil sobre fitness y
          salud.
        </p>
      </div>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-2">
              Planes de Entrenamiento
            </h3>
            <p className="text-gray-600 mb-4">
              Encuentra los mejores planes de entrenamiento para principiantes,
              intermedios y avanzados.
            </p>
            <Link
              to="/rutinas"
              className="text-teal-500 hover:text-teal-700 font-medium"
            >
              Ver Rutinas
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-2">
              Ejercicios
            </h3>
            <p className="text-gray-600 mb-4">
              Descubre los ejercios diseñados para principiantes, intermedios y
              avanzados.
            </p>
            <Link
              to="/ejercicios"
              className="text-teal-500 hover:text-teal-700 font-medium"
            >
              Ver Ejercicios
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-2">
              Programas de Nutrición
            </h3>
            <p className="text-gray-600 mb-4">
              Encuentra los mejores programas de nutrición para principiantes,
              intermedios y avanzados.
            </p>
            <Link
              to="/nutricion"
              className="text-teal-500 hover:text-teal-700 font-medium"
            >
              Ver Programas de Nutrición
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Inicio;
