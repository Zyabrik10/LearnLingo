import { configureStore } from '@reduxjs/toolkit';
import { websiteReducer } from './website/website-reducer';
import { authReducer } from './auth/auth-reducer';

export const store = configureStore({
  reducer: {
    website: websiteReducer,
    auth: authReducer,
  },
});
