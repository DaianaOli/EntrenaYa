import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // URL base de la API

// Función para obtener todos los ejercicios
export const getEjercicios = ()=>{
  return async (dispatch)=>{
    try {
      const response = await axios.get(`${BASE_URL}/ejercicios`);
      dispatch({
        type: 'OBTENER_EJERCICIOS',
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los ejercicios');
    }
  }
}

// Función para crear un nuevo ejercicio
export const crearEjercicio = async (ejercicio) => {
  const response = await axios.post(`${BASE_URL}/ejercicios`, ejercicio);
  return response.data;
};

// Función para eliminar un ejercicio
export const eliminarEjercicio = async (id) => {
  const response = await axios.delete(`${BASE_URL}/ejercicios/${id}`);
  return response.data;
};

// Función para actualizar un ejercicio
export const actualizarEjercicio = async (id, ejercicio) => {
  const response = await axios.put(`${BASE_URL}/ejercicios/${id}`, ejercicio);
  return response.data;
};
