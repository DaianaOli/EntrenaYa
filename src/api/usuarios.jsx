import axios from 'axios';

const API_URL = 'http://localhost:3000'; // URL de la API

// Función para obtener todos los usuarios
export const obtenerUsuarios = ()=>{
  return async (dispatch)=>{
    try {
      const response = await axios.get(`${API_URL}/usuarios`);
      dispatch({
        type: 'OBTENER_USUARIOS',
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los usuarios');
    }
  }
}

// Función para obtener un usuario por ID
export const obtenerUsuarioId = (id) =>{
  return async (dispatch)=>{
    try {
      const response = await axios.get(`${API_URL}/usuarios/${id}`);
      dispatch({
        type: 'OBTENER_USUARIO_ID',
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
      throw new Error(`Error al obtener el usuario con ID ${id}`);
    }
  }
}


// Función para crear un usuario
export const crearUsuario = async (usuario) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios`, usuario);
    return response.data;
  }
  catch (error) {
    console.error(error);
    throw new Error('Error al crear el usuario');
  }
};

// Función para actualizar un usuario
export const actualizarUsuario = async (id, usuarioActualizado) => {
  console.log("desde api", usuarioActualizado)
  try {
    const response = await axios.put(`${API_URL}/usuarios/${id}`, usuarioActualizado);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error al actualizar el usuario con ID ${id}`);
  }
};


// Función para eliminar un usuario
export const eliminarUsuario = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error al eliminar el usuario con ID ${id}`);
  }
};

//Funcion para iniciar sesion
export const iniciarSesion = async (usuario) => {
  console.log("llega", usuario)
  try {
    const response = await axios.post(`${API_URL}/usuarios/login`, usuario);
    console.log(response)
    localStorage.setItem('token', response.data.token)
    return response.data;
  }
  catch (error) {
    console.error(error);
    throw new Error('Error al iniciar sesion');
  }
};
