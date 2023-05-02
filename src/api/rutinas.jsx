import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Cambiar por la URL de la API real

// Obtener todas las rutinas
export const obtenerRutinas = ()=>{
  return async (dispatch)=>{
    try {
      const response = await axios.get(`${API_URL}/rutinas`);
      dispatch({
        type: 'OBTENER_RUTINAS',
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener las rutinas');
    }
  }
}

// Crear una nueva rutina
export const crearRutina = async (rutina) => {
  try {
    const response = await axios.post(`${API_URL}/rutinas`, rutina);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Obtener una rutina por ID
export const obtenerRutinaPorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/rutinas/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Actualizar una rutina por ID
export const actualizarRutina = async (id, rutina) => {
  try {
    const response = await axios.put(`${API_URL}/rutinas/${id}`, rutina);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Eliminar una rutina por ID
export const eliminarRutina = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/rutinas/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
