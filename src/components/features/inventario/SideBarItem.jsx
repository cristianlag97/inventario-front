import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { useDispatch } from "react-redux";
import { changeView } from "../../../store/inventario/inventarioSlice";

const SideBarItem = ({ title = "" }) => {
  const dispatch = useDispatch();

  const onActiveNote = () => {
    console.log(title);
    dispatch(changeView(title));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onActiveNote}>
        <ListItemIcon>
          <TurnedInNotIcon />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={title} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarItem;
