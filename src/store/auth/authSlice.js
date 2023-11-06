import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', //authenticated, not-authenticated, cheking
    id: null,
    email: null,
    name: null,
    errorMessage: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated', //authenticated, not-authenticated, checking;
      state.id = payload.id;
      state.email = payload.email;
      state.name = payload.name;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated', //authenticated, not-authenticated, checking;
      state.id = null;
      state.email = null;
      state.name = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
});


 // Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice;
