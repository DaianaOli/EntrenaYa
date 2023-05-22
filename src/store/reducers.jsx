import { combineReducers } from 'redux';
import { OBTENER_EJERCICIOS, AGREGAR_EJERCICIO, ELIMINAR_EJERCICIO, OBTENER_RUTINAS, AGREGAR_RUTINA, ELIMINAR_RUTINA, OBTENER_USUARIOS, AGREGAR_USUARIO, ELIMINAR_USUARIO, INICIAR_SESION, OBTENER_USUARIO_ID} from './tipos';

// Reducer para los ejercicios
const ejerciciosReducer = (state = [], action) => {
  switch (action.type) {
    case OBTENER_EJERCICIOS:
      // Retorna el estado actual
      return action.payload;
    case AGREGAR_EJERCICIO:
      // Agrega el nuevo ejercicio al estado
      return [...state, action.payload];
    case ELIMINAR_EJERCICIO:
      // Elimina el ejercicio del estado por su ID
      return state.filter(ejercicio => ejercicio.id !== action.payload);
    default:
      return state;
  }
};

// Reducer para las rutinas
const rutinasReducer = (state = [], action) => {
  switch (action.type) {
    case OBTENER_RUTINAS:
      // Retorna el estado actual
      return [action.payload]
      
    case AGREGAR_RUTINA:
      // Agrega la nueva rutina al estado
      return [...state, action.payload];
    case ELIMINAR_RUTINA:
      // Elimina la rutina del estado por su ID
      return state.filter(rutina => rutina.id !== action.payload);
    default:
      return state;
  }
};

// Reducer para los usuarios
const usuariosReducer = (state = [], action) => {
  switch (action.type) {
    case OBTENER_USUARIOS:
      // Retorna el estado actual
      return [action.payload];
    case OBTENER_USUARIO_ID:
      // Retorna el estado actual
      return [action.payload];
    case AGREGAR_USUARIO:
      // Agrega el nuevo usuario al estado
      return [...state, action.payload];
    case ELIMINAR_USUARIO:
      // Elimina el usuario del estado por su ID
      return state.filter(usuario => usuario.id !== action.payload);
    default:
      return state;
  }
};

const usuarioAuth = (state = [], action) =>{
  switch (action.type) {
    case INICIAR_SESION:
      // Retorna el estado actual
      return [action.payload];
    default:
      return state;
  }
}

// Combinar los reducers
const rootReducer = combineReducers({
  ejercicios: ejerciciosReducer,
  rutinas: rutinasReducer,
  usuarios: usuariosReducer,
  token: usuarioAuth,
});

export default rootReducer;
