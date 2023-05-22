import Ejercicios from "./ejercicios";

const Rutinas = ({rutina}) => {
  return (
    <div className="mt-2 overflow-hidden p-4 flex flex-col ">
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-xl font-medium leading-6 text-teal-900 mb-2">{rutina.nombre}</h1>
      <p className="text-gray-600 text-sm mb-4">{rutina.descripcion}</p>
      <p className="text-gray-600 text-sm mb-4">Tiempo estimado: {rutina.tiempo} minutos</p>
      <h1 className="text-xl font-medium leading-6 text-teal-900 mb-2">Ejercicios</h1>
      <div className="flex items-center justify-evenly bg-teal-500 rounded-md py-2 px-2 flex-wrap ">
      {rutina.Ejercicios?.map((ejercicio) => (
        <Ejercicios key={ejercicio.id} ejercicio={ejercicio} />
      ))}
      </div>
    </div>
  </div>
  );
};

export default Rutinas;
