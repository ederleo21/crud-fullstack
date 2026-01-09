import { configureStore } from '@reduxjs/toolkit';
import modalidadReducer from '../modules/modalidades/slices/modalidadSlice'
import carreraReducer from '../modules/carreras/slices/carreraSlice';

export const store = configureStore({
  reducer: {
    modalidad: modalidadReducer,
    carrera: carreraReducer,
  },
});