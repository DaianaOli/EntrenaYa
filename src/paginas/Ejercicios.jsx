import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Ejercicio from '../componentes/ejercicios';
import {getEjercicios} from '../api/ejercicios.jsx'
import Boton from '../componentes/common/Boton';

const Ejercicios = () => {
  const dispatch = useDispatch();
  const ejercicios = useSelector(state => state.ejercicios);

  useEffect(() => {
    dispatch(getEjercicios());
  }, []);

  const volver = ()=>{
    window.location.href = '/inicio'
  }

  return (
    <div className= "mt-2 overflow-hidden p-4 flex items-center flex-col ">
      <h1 
      className="text-xl font-medium leading-6 text-teal-900 mb-2">Ejercicios</h1>
      <div className="flex flex-wrap justify-center gap-4 items-center">
      {ejercicios.map((ejercicio, index) => (
        <Ejercicio key={index} ejercicio={ejercicio} />
      ))}
      </div>
      <Boton onClick={volver} children='Volver'/>
    </div>
  );
};

export default Ejercicios;
