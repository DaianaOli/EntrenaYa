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
      className="mt-2 overflow-hidden w-full flex flex-col "
    >
      <h1
        className="text-3xl font-medium leading-6 text-teal-400"
      >
      Rutinas</h1>
     {
        rutinas.map(rutina => (
          <div className='flex flex-wrap gap-8 items-center'>
          <Rutina key={rutina.id} rutina={rutina}/>
          </div>
        ))
     }
    </div>
  );
}

export default Rutinas;
