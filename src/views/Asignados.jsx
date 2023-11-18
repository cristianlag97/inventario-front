
import { DataGrid } from '@mui/x-data-grid';


export const Asignados  = () => {
 


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Nombre ', headerName: 'Nombre del Agente', width: 200 },
    { field: 'Area', headerName: 'Area', width: 130 },
    { field: 'referencia', headerName: 'Referencia',width: 90,},
    { field: 'Modelo', headerName: 'Modelo',width: 90,},
    { field: 'service_Tag', headerName: 'Service Tag',width: 90,},
    { field: 'Activo_PC', headerName: 'Activo PC',width: 90,},
    { field: 'Service_tag_Pantalla', headerName: 'Service tag Pantalla',width: 150,},
    { field: 'Activo_Pantalla', headerName: 'Activo Panatalla',width: 150,},
    
    
  ];
  
  const rows = [
    { id: 1, Area: 'Snow', Nombre : 'Jon', referencia: 35 , Modelo: 45, service_Tag: 69, Activo_PC: 10, Service_tag_Pantalla: 56, Activo_Pantalla:87 },
    { id: 2, Area: 'Snow', Nombre : 'Jon', referencia: 35 , Modelo: 45, service_Tag: 69, Activo_PC: 10, Service_tag_Pantalla: 56, Activo_Pantalla:87 },
    { id: 3, Area: 'Snow', Nombre : 'Jon', referencia: 35 , Modelo: 45, service_Tag: 69, Activo_PC: 10, Service_tag_Pantalla: 56, Activo_Pantalla:87 },
    { id: 4, Area: 'Snow', Nombre : 'Jon', referencia: 35 , Modelo: 45, service_Tag: 69, Activo_PC: 10, Service_tag_Pantalla: 56, Activo_Pantalla:87 },
    { id: 5, Area: 'Snow', Nombre : 'Jon', referencia: 35 , Modelo: 45, service_Tag: 69, Activo_PC: 10, Service_tag_Pantalla: 56, Activo_Pantalla:87 },
    { id: 6, Area: 'Snow', Nombre : 'Jon', referencia: 35 , Modelo: 45, service_Tag: 69, Activo_PC: 10, Service_tag_Pantalla: 56, Activo_Pantalla:87 },
    { id: 7, Area: 'Snow', Nombre : 'Jon', referencia: 35 , Modelo: 45, service_Tag: 69, Activo_PC: 10, Service_tag_Pantalla: 56, Activo_Pantalla:87 },
    { id: 8, Area: 'Snow', Nombre : 'Jon', referencia: 35 , Modelo: 45, service_Tag: 69, Activo_PC: 10, Service_tag_Pantalla: 56, Activo_Pantalla:87 },
  ];
  
 {

 

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    );
  };
}