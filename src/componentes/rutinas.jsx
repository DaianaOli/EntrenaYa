const Rutinas = ({rutina}) => {

  return (
    <div>
      <ul>
        {rutina.map((rutina) => (
          <li key={rutina.id}>
            <h1>{rutina.nombre}</h1>
            <p>{rutina.descripcion}</p>
            <p>{rutina.tiempo} minutos</p>
            <ul>
              {rutina.Ejercicios?.map((ejercicio) => (
                <li key={ejercicio.id}>
                  <h3>{ejercicio.nombre}</h3>
                  <p>{ejercicio.descripcion}</p>
                  <p>{ejercicio.sets} sets de {ejercicio.repeticiones} repeticiones</p>
                  <video src={ejercicio.video} controls />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rutinas;
