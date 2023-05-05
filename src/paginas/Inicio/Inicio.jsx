import { Link } from "react-router-dom";
import Menu from "../../componentes/Menu";
import Rutinas from "../../paginas/Rutinas";
import Ejercicios from "../Ejercicios";

const Inicio = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-end p-4">
        <Menu />
      </div>
      {/* Banner */}
      <section className="bg-teal-400 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Bienvenido a mi sitio web</h2>
          <p className="text-lg mb-8">
            Este es un sitio web dedicado a la salud y el fitness, donde puedes encontrar entrenamientos y programas de nutrición diseñados para ti. Navega por nuestro sitio para encontrar los mejores programas de entrenamiento y nutrición, así como información útil sobre fitness y salud.
          </p>
        </div>
      </section>
      {/* Sección de planes de entrenamiento y nutricion */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="gap-8">
            {/* Planes principiante */}
           <Rutinas/>
          </div>
          <div className="gap-8">
          <Ejercicios/>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Inicio;