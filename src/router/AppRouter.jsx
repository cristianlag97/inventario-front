import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRoutes } from '../pages';
import useCheckAuth from '../hooks/useCheckAuth';
import CheckingAuth from '../ui/components/CheckingAuth';
import { InventarioRoute } from '../pages/inventario/routes/InventarioRoutes';


export const AppRouter = () => {

  const { status } = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth/>
  }

  return (
    <Routes>
      {
        (status === 'authenticated')
        ? <Route path='/*' element={<InventarioRoute/>}/>
        : <Route path='/auth/*' element={<AuthRoutes/>}/>
      }

      <Route path='/*' element={ <Navigate to={'/auth/login'}/> }/> 

    </Routes>
  )
}
