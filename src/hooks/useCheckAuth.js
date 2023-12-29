import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from "../controllers/auth";
import { login, logout } from "../store/auth/authSlice";



const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    // Recuperar el ID del usuario desde localStorage

    const id = localStorage.getItem('userId');

    useEffect(() => {
        console.log(id);
        validateToken({id}).then((user) => {
            console.log(`EL RESULTADO es: ${user}`)
            if (user == null) return dispatch(logout());
            

            const { id, name, email } = user;
            dispatch(login({ id, email, name }));
        });
    }, [])

    return {
        status
    }
}

export default useCheckAuth