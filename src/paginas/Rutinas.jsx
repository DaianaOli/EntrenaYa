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
    <div>
      <h1>Rutinas</h1>
     {
        rutinas.map(rutina => (
          <Rutina key={rutina.id} rutina={rutina}/>
        ))
     }
    </div>
  );
}

export default Rutinas;
