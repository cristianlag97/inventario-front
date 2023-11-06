import { Navigate, Route, Routes } from "react-router-dom"
import { InventarioPage } from "../InventarioPage"


export const InventarioRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<InventarioPage/>}/>

      <Route path="/*" element={<Navigate to={'/'}/>}/>
    </Routes>
  )
}
