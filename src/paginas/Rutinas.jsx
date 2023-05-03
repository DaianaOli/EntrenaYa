import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerRutinas } from '../api/rutinas';
import Rutina from '../componentes/rutinas';

function Rutinas() {
  const dispatch = useDispatch();
  const rutinas = useSelector(state=> state.rutinas)
  console.log(rutinas)

  useEffect(() => {
    dispatch(obtenerRutinas());
  }, []);

  return (
    <div
      className="mt-2 overflow-hidden shadow sm:rounded-lg p-4 flex flex-wrap gap-8"
    >
      <h1
        className="text-3xl font-medium leading-6 text-teal-400"
      >
      Rutinas</h1>
     {
        rutinas.map(rutina => (
          <Rutina key={rutina.id} rutina={rutina}/>
        ))
     }
    </div>
  );
}

export default Rutinas;
