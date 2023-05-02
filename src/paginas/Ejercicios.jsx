import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Ejercicio from '../componentes/ejercicios';
import {getEjercicios} from '../api/ejercicios.jsx'

const Ejercicios = () => {
  const dispatch = useDispatch();
  const ejercicios = useSelector(state => state.ejercicios);

  console.log(ejercicios)
  useEffect(() => {
    dispatch(getEjercicios());
  }, []);


  return (
    <div>
      <h1>Ejercicios</h1>
      {ejercicios.map(ejercicio => (
        <Ejercicio key={ejercicio.id} ejercicio={ejercicio} />
      ))}
    </div>
  );
};

export default Ejercicios;
