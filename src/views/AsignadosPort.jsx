
export const AsignadosPort  = () => {
  
  
  
 


  
  
  
  
 {

 

    return (
      
      
      <div style={{ height: 400, width: '100%' }}>
        <form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>
<br/>
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Area</th>
      <th scope="col">Nombre</th>
      <th scope="col">Referencia</th>
      <th scope="col">Modelo</th>
      <th scope="col">Service Tag</th>
      <th scope="col">Activo PC</th>
      <th scope="col">Service Tag Pantalla</th>
      <th scope="col">Activo Pantalla</th>
      <th scope="col">Renuncia</th>
      <th scope="col">Cambio de equipo</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Opraciones</td>
      <td>Otto</td>
      <td>@mdo</td>
       <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
       <td>Mark</td>
      <td>Otto</td>
      <td>
        <a href="#" class="btn btn-danger">Renuncia</a>
      </td>
       <td>
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
       </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>
      <a href="#" class="btn btn-danger">Renuncia</a>
      </td>
      <td>
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
      </td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>
      <a href="#" class="btn btn-danger">Renuncia</a>
      </td>
      <td>
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
      </td>
    </tr>
  </tbody>
</table>
        
        
        
      </div>
    );
  };
}