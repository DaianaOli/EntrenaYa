import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerUsuarios } from '../api/usuarios';
import Usuario from '../componentes/usuarios';

const Usuarios = () => {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);

  useEffect(() => {
    dispatch(obtenerUsuarios());
  }, [dispatch]);

  return (
    <div>
      <h1>Usuarios</h1>
      {!usuarios ? 
      <p>Cargando...</p> :
      usuarios.map((u) => (
        <Usuario key={u.id} usuario={u} />
      ))}
    </div>
  );

};

export default Usuarios;