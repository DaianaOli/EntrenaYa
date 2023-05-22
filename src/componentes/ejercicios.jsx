
const Ejercicios = ({ejercicio}) => {
  return (
    <div className="mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 items-center justify-center">
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-2">{ejercicio.nombre}</h3>
      <p className="text-gray-600 mb-2">Descripción: {ejercicio.descripcion}</p>
      <p className="text-gray-600">Sets: {ejercicio.sets}</p>
      <p className="text-gray-600">Repeticiones: {ejercicio.repeticiones}</p>
      <div className="flex justify-center">
        {/* <video src={ejercicio.video} controls className="w-full" /> */}
        <iframe 
            title="YouTube video player" 
            width="100%" 
            height="300" 
            src={ejercicio.video} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
          />
      </div>
    </div>
  </div>
  );
};

export default Ejercicios;
