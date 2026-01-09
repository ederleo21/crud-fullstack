import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carreras: [],
  loading: false,
  error: null,
};

const carreraSlice = createSlice({
  name: 'carrera',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
    },

    setCarreras: (state, action) => {
      state.carreras = action.payload;
      state.loading = false;
      state.error = null;
    },

    addCarrera: (state, action) => {
      state.carreras.push(action.payload);
    },

    editCarrera: (state, action) => {
      const updated = action.payload;
      state.carreras = state.carreras.map(m =>
        m.id === updated.id ? updated : m
      );
    },

    removeCarrera: (state, action) => {
      const id = action.payload;
      state.carreras = state.carreras.filter(m => m.id !== id);
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    
    clearCarreras: (state) => {
      state.carreras = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  startLoading,
  setCarreras,
  addCarrera,
  editCarrera,
  removeCarrera,
  setError,
  clearCarreras,
} = carreraSlice.actions;

export default carreraSlice.reducer;