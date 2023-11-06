
import { loginWithUser, registerUser } from "../../controllers/auth";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startCreatingUser = ({email, password, name}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const {ok, errorMessage, id,} = await registerUser({email, password, name});

    if(!ok) return dispatch(logout({errorMessage}));
    
    dispatch(login({id, name, email}));

  }
}

export const startLoginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const {ok, name, id, errorMessage} = await loginWithUser({email, password});

    if(!ok) return dispatch(logout({errorMessage}));

    dispatch(login({id, name, email}))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(logout({errorMessage: null}));
  }
}