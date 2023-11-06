import { Box, Toolbar } from "@mui/material";
import { Navbar } from "../features/inventario/Navbar";
import { Sidebar } from "../features/inventario/Sidebar";

const drawerWidth = 240;

export const InventarioLayout = ({children}) => {
  return (
    <Box
      sx={{display: 'flex'}}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Navbar drawerWidth={drawerWidth}/>

      <Sidebar drawerWith={drawerWidth}/>

      <Box
        component="main"
        sx={{flexGrow: 1, p: 3}}
      >
        <Toolbar />
        { children }
      </Box>
    </Box>
  )
}
