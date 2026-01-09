import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalidades: [],
  loading: false,
  error: null,
};

const modalidadSlice = createSlice({
  name: 'modalidad',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
    },

    setModalidades: (state, action) => {
      state.modalidades = action.payload;
      state.loading = false;
      state.error = null;
    },

    addModalidad: (state, action) => {
      state.modalidades.push(action.payload);
    },

    editModalidad: (state, action) => {
      const updated = action.payload;
      state.modalidades = state.modalidades.map(m =>
        m.id === updated.id ? updated : m
      );
    },

    removeModalidad: (state, action) => {
      const id = action.payload;
      state.modalidades = state.modalidades.filter(m => m.id !== id);
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    
    clearModalidades: (state) => {
      state.modalidades = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  startLoading,
  setModalidades,
  addModalidad,
  editModalidad,
  removeModalidad,
  setError,
  clearModalidades,
} = modalidadSlice.actions;

export default modalidadSlice.reducer;