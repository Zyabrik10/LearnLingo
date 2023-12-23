import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './auth-init';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleIsLoggedIn(state, { payload }) {
      state.isLoggedIn = payload;
    },
  },
  extraReducers: builder => {},
});

export const authReducer = authSlice.reducer;
