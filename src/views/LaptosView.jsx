import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { Disponible } from "../components/features/inventario/Disponible";

export const LaptopsView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar Portatil
        </Button>
      </Grid>

      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <TextField
            typ="text"
            variant="filled"
            fullWidth
            placeholder="Referencia"
            label="Referencia"
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            typ="text"
            variant="filled"
            fullWidth
            placeholder="Modelo"
            label="Modelo"
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            typ="text"
            variant="filled"
            fullWidth
            placeholder="Service Tad "
            label="Service Tag"
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            typ="text"
            variant="filled"
            fullWidth
            placeholder="Activo Portatil"
            label="Activo PC"
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>
        
      </Grid>

      <Disponible />
    </Grid>
  );
};
