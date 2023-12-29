import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { Disponible } from "../components/features/inventario/Disponible";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { createonePc, getAllPcs } from "../store/inventario/thunks";
import { useEffect } from "react";







export const PcsView = () => {
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getAllPcs());
  }, []);

  const {
    referencia,
    modelo,
    servicetag,
    activopc,
    servicetagpantalla,
    activopantalla,
    onInputChanged,
  } = useForm({
    referencia: "",
    modelo: "",
    servicetag: "",
    activopc: "",
    servicetagpantalla: "",
    activopantalla: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      createonePc(
        referencia,
        modelo,
        servicetag,
        activopc,
        servicetagpantalla,
        activopantalla
      )
    );
  };

  return (
    <>
      <form
      onSubmit={onSubmit}
      className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ mb: 1 }}
        >
          <Grid item>
            <Button type="submit" color="primary" sx={{ padding: 2 }}>
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              Guardar PC
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
                name="referencia"
                value={referencia}
                onChange={onInputChanged}
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
                name="modelo"
                value={modelo}
                onChange={onInputChanged}
                sx={{ border: "none", mb: 1 }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                typ="text"
                variant="filled"
                fullWidth
                placeholder="Service Tad"
                label="Service Tag"
                name="servicetag"
                value={servicetag}
                onChange={onInputChanged}
                sx={{ border: "none", mb: 1 }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                typ="text"
                variant="filled"
                fullWidth
                placeholder="Activo PC"
                label="Activo PC"
                name="activopc"
                value={activopc}
                onChange={onInputChanged}
                sx={{ border: "none", mb: 1 }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                typ="text"
                variant="filled"
                fullWidth
                placeholder="Service Tad Pantalla"
                label="Service Tag Pantalla"
                name="servicetagpantalla"
                value={servicetagpantalla}
                onChange={onInputChanged}
                sx={{ border: "none", mb: 1 }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                typ="text"
                variant="filled"
                fullWidth
                placeholder="Activo Pantalla"
                label="Activo Pantalla"
                name="activopantalla"
                value={activopantalla}
                onChange={onInputChanged}
                sx={{ border: "none", mb: 1 }}
              />
            </Grid>
            
          </Grid>

        </Grid>
      </form>
      <Disponible />
    </>
  );
};
