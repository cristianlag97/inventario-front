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
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

import { useState } from "react";





function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const Disponible = () => {


  const { pcs } = useSelector((state) => state.inventario);

  console.log(pcs);

  

  return (
    
    <TableContainer component={Paper}>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <br/>
      
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            
            <TableCell>Referencia</TableCell>
            <TableCell align="right">Modelo</TableCell>
            <TableCell align="right">Service tag</TableCell>
            <TableCell align="right">Activo PC</TableCell>
            <TableCell align="right">Service tag Pantalla</TableCell>
            <TableCell align="right">Activo Pantalla</TableCell>
            <TableCell align="right">Asignacion</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Cambiar Estado</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {pcs.map((pc) => (
            <TableRow
              key={pc.id}
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
              
              
                <button type="button" className="btn-group" data-bs-toggle="modal" data-bs-target="#Asignar">
                    Asignar Equipo
                </button>

            <div className="modal fade" id="Asignar" tabindex="-1" aria-labelledby="Asignar" aria-hidden="true">
              <div className="modal-dialog">
                <br />
                <br />
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="Asignar">Informacion del Funcionario</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-2">
                        <label htmlFor="Name" className="form-label ">Nombre</label>
                        <input type="text" className="form-control" id="Nombre" aria-describedby="Nombre"/>
                        <div id="Nombre" className="form-text"></div>    
                      </div>
                      <div className="mb-2">
                        <label htmlFor="Area" className="form-label">Area</label>
                        <input type="text" className="form-control" id="Area" aria-describedby="Area"/>
                        <div id="Area" className="form-text"></div>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="Referencia" className="form-label">Referencia</label>
                        <input type="text" className="form-control" id="Referencia" aria-describedby="Referencia"/>
                        <div id="Referencia" className="form-text"></div>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="Modelo" className="form-label">Modelo</label>
                        <input type="text" className="form-control" id="Modelo" aria-describedby="Modelo"/>
                        <div id="Modelo" className="form-text"></div>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="Service" className="form-label">Service Tag</label>
                        <input type="text" className="form-control" id="Service" aria-describedby="Service"/>
                        <div id="Service" className="form-text"></div>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="Activo" className="form-label">Activo Pc</label>
                        <input type="text" className="form-control" id="Activo" aria-describedby="Activo"/>
                        <div id="Activo" className="form-text"></div>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="Tag" className="form-label">Service Tag Pantalla</label>
                        <input type="text" className="form-control" id="Tag" aria-describedby="Tag"/>
                        <div id="Tag" className="form-text"></div>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="Pantalla" className="form-label">Activo Pantalla</label>
                        <input type="text" className="form-control" id="Pantalla" aria-describedby="Pantalla"/>
                        <div id="Pantalla" className="form-text"></div>
                      </div>
                {/* <a href="#">Descargar</a> */}
              </form>
              <form action="procesar.php" method="post"encType="multipart/form-data">
                <label htmlFor="archivo">Subir Acta</label>
                <input type="file" name="archivo" id="archivo"/>
              </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>                
              </TableCell>




              <TableCell align="right">
              
                    <button type="button" className="btn-group" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      Editar equipo
                    </button>

                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <br />
                        <br />
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">CAMBIA DATOS NECESARIOS</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                          <div className="mb-2">
                  <label htmlFor="Service" className="form-label">Service Tag</label>
                  <input type="text" className="form-control" id="Service" aria-describedby="Service"/>
                  <div id="Service" className="form-text"></div>
                </div>
                <div className="mb-2">
                  <label htmlFor="Activo" className="form-label">Activo Pc</label>
                  <input type="text" className="form-control" id="Activo" aria-describedby="Activo"/>
                  <div id="Activo" className="form-text"></div>
                </div>
                <div className="mb-2">
                  <label htmlFor="Tag" className="form-label">Service Tag Pantalla</label>
                  <input type="text" className="form-control" id="Tag" aria-describedby="Tag"/>
                  <div id="Tag" className="form-text"></div>
                </div>
                <div className="mb-2">
                  <label htmlFor="Pantalla" className="form-label">Activo Pantalla</label>
                  <input type="text" className="form-control" id="Pantalla" aria-describedby="Pantalla"/>
                  <div id="Pantalla" className="form-text"></div>
                </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                          </div>
                        </div>
                      </div>
                    </div>  
              </TableCell>
              <TableCell align="right">
              
              
                <button type="button" className="btn-group" data-bs-toggle="modal" data-bs-target="#EstadoC">
                    Cambiar de Estado
                </button>

            <div className="modal fade" id="EstadoC" tabindex="-1" aria-labelledby="Estado" aria-hidden="true">
              <div className="modal-dialog">
                <br />
                <br />
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="Estado">Cambiar de Estado</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              </div>
              <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Disponible</button>
                            
                          </div>
              </div>
              </div>                
              </TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

