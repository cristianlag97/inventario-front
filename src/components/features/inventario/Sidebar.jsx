import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import SideBarItem from "./SideBarItem";

export const Sidebar = ({ drawerWith = 240 }) => {
  const { name } = useSelector((state) => state.auth);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" //temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWith },
        }}
      >
        <Toolbar>
          <Typography varian="h6" noWrap component="div">
            {name}
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {menuData.map((menu) => (
            <SideBarItem key={menu.id} {...menu} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

const menuData = [
  {
    id: 1,
    title: "Usuarios",
  },
  {
    id: 2,
    title: "Pcs",
  },
  {
    id: 3,
    title: "Laptops",
  },
  {
    id: 4,
    title: "Asignados Pc",
  },
  {
    id: 5,
    title: "Asignados Portatil"
  },
  {
    id: 6,
    title: "Dañados",
  },
];
