import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useSelector } from "react-redux";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from "react";



export default function BasicPopover() {
  
};


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const Disponible = () => {

  const [anchor, setanchor] = useState(null);

  const handleClick = (event) => {
    setanchor(event.currentTarget);
  };

  const handleClose = () => {
    setanchor(null);
  };

  const open = Boolean(anchor);
  const id =open ? 'simple-popover' : undefined;

  const { pcs } = useSelector((state) => state.inventario);

  console.log(pcs);

  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Referencia</TableCell>
            <TableCell align="right">Modelo</TableCell>
            <TableCell align="right">Service tag</TableCell>
            <TableCell align="right">Activo PC</TableCell>
            <TableCell align="right">Service tag Pantalla</TableCell>
            <TableCell align="right">Activo Panatalla</TableCell>
            <TableCell align="right">Asignacion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pcs.map((pc) => (
            <TableRow
              key={pc.referencia}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pc.referencia}
              </TableCell>
              <TableCell align="right">{pc.modelo}</TableCell>
              <TableCell align="right">{pc.servicetag}</TableCell>
              <TableCell align="right">{pc.activopc}</TableCell>
              <TableCell align="right">{pc.servicetagpantalla}</TableCell>
              <TableCell align="right">{pc.activopantalla}</TableCell>
              <TableCell align="right">
        <div>
                <Button >
                  Asignar Equipo
                </Button>
              <Popover
                    id={pc.id}
                    open={open}
                    anchorEl={anchor} 
                    onClose={handleClose}
                    anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                  }}>

                  <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                  
                </Popover>
        </div>
              
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

