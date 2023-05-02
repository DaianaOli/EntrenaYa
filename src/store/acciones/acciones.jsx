import { OBTENER_EJERCICIOS, AGREGAR_EJERCICIO, ELIMINAR_EJERCICIO, OBTENER_RUTINAS, AGREGAR_RUTINA, ELIMINAR_RUTINA, OBTENER_USUARIOS, AGREGAR_USUARIO, ELIMINAR_USUARIO, INICIAR_SESION, OBTENER_USUARIO_ID } from '../tipos';

// Acciones para obtener los ejercicios
export const obtenerEjercicios = () => ({
  type: OBTENER_EJERCICIOS,
});

export const agregarEjercicio = ejercicio => ({
  type: AGREGAR_EJERCICIO,
  payload: ejercicio
});

export const eliminarEjercicio = id => ({
  type: ELIMINAR_EJERCICIO,
  payload: id
});

// Acciones para obtener las rutinas
export const obtenerRutinas = () => ({
  type: OBTENER_RUTINAS,
});

export const agregarRutina = rutina => ({
  type: AGREGAR_RUTINA,
  payload: rutina
});

export const eliminarRutina = id => ({
  type: ELIMINAR_RUTINA,
  payload: id
});

// Acciones para obtener los usuarios
export const obtenerUsuarios = () => ({
  type: OBTENER_USUARIOS,
});

export const obtenerUsuarioId 
= id => ({
  type: OBTENER_USUARIO_ID,
  payload: id
});


export const agregarUsuario = usuario => ({
  type: AGREGAR_USUARIO,
  payload: usuario
});

export const eliminarUsuario = id => ({
  type: ELIMINAR_USUARIO,
  payload: id
});

// Acciones para iniciar sesión
export const iniciarSesion = usuario => ({
  type: INICIAR_SESION,
  payload: usuario
});

