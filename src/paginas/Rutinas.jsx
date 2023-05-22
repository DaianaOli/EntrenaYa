import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerRutinas } from '../api/rutinas';
import Rutina from '../componentes/rutinas';
import Boton from '../componentes/common/Boton';
import { volver } from '../store/acciones/acciones';

function Rutinas() {
  const dispatch = useDispatch();
  const rutinas = useSelector(state=> state.rutinas)

  useEffect(() => {
    dispatch(obtenerRutinas());
  }, []);

  return (
    <div
      className="mt-2 overflow-hidden w-full flex flex-col items-center p-4"
    >
      <h1
        className="text-3xl font-medium leading-6 text-teal-400"
      >
      Rutinas</h1>
      <div className='flex flex-wrap'>
     {
        rutinas[0]?.map(rutina => (
          <Rutina key={rutina.id} rutina={rutina}/>
        ))
     }
      </div>
      <Boton children='Volver' onClick={volver}/>
    </div>
  );
}

export default Rutinas;
