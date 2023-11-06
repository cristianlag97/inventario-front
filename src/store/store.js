import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import inventarioSlice from './inventario/inventarioSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    inventario: inventarioSlice.reducer,
  },
})

export default store;