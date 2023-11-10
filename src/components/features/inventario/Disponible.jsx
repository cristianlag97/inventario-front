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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const Disponible = () => {
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
