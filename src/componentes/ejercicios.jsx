import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerEjercicios } from "../store/acciones/acciones"

const Ejercicios = ({ejercicio}) => {
  const dispatch = useDispatch();
  // const ejercicios = useSelector(state => state.ejercicios);

  // useEffect(() => {
  //   dispatch(obtenerEjercicios());
  // }, [dispatch]);

  return (
    <div>
      <h1>Ejercicios</h1>
      {ejercicio.map(ejercicio => (
        <div key={ejercicio.id}>
          <h2>{ejercicio.nombre}</h2>
          <p>{ejercicio.descripcion}</p>
          <p>Sets: {ejercicio.sets} - Repeticiones: {ejercicio.repeticiones}</p>
          <a href={ejercicio.video}>Ver video</a>
        </div>
      ))}
    </div>
  );
};

export default Ejercicios;
