

export const Asignados  = () => {
   
  
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
        <a href="#" class="btn btn-danger">Renunicia</a>
      </td>
       <td>Mark</td>
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
      <a href="#" class="btn btn-danger">Renunicia</a>
      </td>
      <td>Jacob</td>
      
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
      <a href="#" class="btn btn-danger">Renunicia</a>
      </td>
      <td>Jacob</td>
    </tr>
  </tbody>
</table>
        
        
        
      </div>
    );
  };
}