import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './auth-init';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
});
