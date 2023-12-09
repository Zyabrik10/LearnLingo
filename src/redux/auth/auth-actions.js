import { createAction } from '@reduxjs/toolkit';

export const signin = createAction('auth/signin', (_, thunkAPI) => {});
export const login = createAction('auth/login', (_, thunkAPI) => {});
export const logout = createAction('auth/logout', (_, thunkAPI) => {});
