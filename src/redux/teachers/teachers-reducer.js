import { initialState } from './teachers-init';

import { createSlice } from '@reduxjs/toolkit';

const taechersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    getTeachers(state, { payload }) {
      state.teachers = payload;
    },
    setLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const { getTeachers, setLoading } = taechersSlice.actions;
export const teachersReducer = taechersSlice.reducer;
