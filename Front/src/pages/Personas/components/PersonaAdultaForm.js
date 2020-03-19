import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import AttachMoney from "@material-ui/icons/AttachMoney";
import { DialogContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from '@material-ui/core/InputAdornment';
import {ApiRoutes} from "../../../utils/APIRoutes";

export default function PersonaAdultaForm({ abrir, cerrar, idPersona, agregarAdulto }) {
  const [open, setOpen] = useState(abrir);
  const [datos, setDatos] = useState({
    IdEntidad: "",
    IdTipoEducacion: "",
    IdPersona: idPersona,
    Jornada: "",
    Cargo: "",
    Salario: 0,
  });
  const [entidad, setEntidad] = useState([]);
  const [tipoEducacion, setTipoEducacion] = useState([]);

  const urlEntidad = `${ApiRoutes.baseURI}${ApiRoutes.Entidad}`;
  const urlTipoEducacion = `${ApiRoutes.baseURI}${ApiRoutes.TipoEducacion}`;
  const tipoJornada = [{
    id:"diurna",
  },{id:"nocturna"}];
  const Cargo = ["Jefe", "CEO", "Gerente","Comercial", "Ingeniero", "Servicios generales", "Servicio soporte"];

  useEffect(() => {
    const FetchDataEntidad = async () => {
      const response = await window.fetch(urlEntidad);
      const data = await response.json();
      setEntidad(data.entidades);
    };
    const FetchDataEducacion = async () => {
      const respuesta = await window.fetch(urlTipoEducacion);
      const dataFamilia = await respuesta.json();
      setTipoEducacion(dataFamilia.entidades);
    };
    FetchDataEntidad();
    FetchDataEducacion();
  }, []);

  const cerrarFormulario = () => {
    let funcion = cerrar;
    funcion();
  };
  const cambiarInformacion = ({ target }) => {
    console.log(target);
    const { checked, name, type, value } = target;
    setDatos({ ...datos, [name]: type === "checkbox" ? checked : value });
  };

  const agregar = () => {
    if(validar()) {
      let funcionAg = agregarAdulto;
      funcionAg(datos);
    }
  }
  const validar = () => {
    console.log(datos);
    if (
      datos.IdEntidad === "" ||
      datos.IdTipoEducacion === "" ||
      datos.Jornada === "" ||
      datos.Salario === 0 
    ) {
      alert("Tiene que llenar todos los campos obligatorios");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <Dialog fullScreen open={open} onClose={() => cerrarFormulario()}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => cerrarFormulario()}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Button
              autoFocus
              color="inherit"
              onClick={() => agregar()}
            >
              Guardar
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <Grid container spacing={5} style={{ paddingTop: "10%" }}>
            <Grid item xs={12}>
              <Typography variant={"h2"}>Formulario Adulto</Typography>
            </Grid>
            <Grid item xs={6}>
              <div style={{ paddingTop: "6.5%" }}>
                <InputLabel id="label-entidad">Entidad *</InputLabel>
                <Select
                  labelId="label-entidad"
                  name="IdEntidad"
                  fullWidth
                  required
                  onChange={cambiarInformacion}
                >
                  {entidad.map(f => (
                    <MenuItem required key={f._id} value={f._id}>
                      {f.NombreEntidad}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ paddingTop: "6.5%" }}>
                <InputLabel id="label-educacion">Tipo Educacion *</InputLabel>
                <Select
                  labelId="label-educacion"
                  name="IdTipoEducacion"
                  fullWidth
                  required
                  onChange={cambiarInformacion}
                >
                  {tipoEducacion.map(f => (
                    <MenuItem required key={f._id} value={f._id}>
                      {f.NombreTipoEducacion}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ paddingTop: "6.5%" }}>
                <InputLabel id="label-cargo">Cargo *</InputLabel>
                <Select
                  labelId="label-cargo"
                  name="Cargo"
                  fullWidth
                  required
                  onChange={cambiarInformacion}
                >
                  {Cargo.map(f => (
                    <MenuItem required key={f} value={f}>
                      {f}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ paddingTop: "6.5%" }}>
                <InputLabel id="label-jornada">Jornada *</InputLabel>
                <Select
                  labelId="label-educacion"
                  name="Jornada"
                  fullWidth
                  required
                  onChange={cambiarInformacion}
                >
                  {tipoJornada.map(f => (
                    <MenuItem required key={f.id} value={f.id}>
                      {f.id}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                name="Salario"
                label="Salario"
                type="number"
                fullWidth
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoney />
                      </InputAdornment>
                    ),
                  }}
                onChange={cambiarInformacion}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  ); 
}
