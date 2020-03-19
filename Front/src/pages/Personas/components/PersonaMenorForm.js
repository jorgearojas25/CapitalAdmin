import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { DialogContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import {ApiRoutes} from "../../../utils/APIRoutes";

export default function PersonaMenorForm({ abrir, cerrar, idPersona, agregarMenor }) {
  const [open, setOpen] = useState(abrir);
  const [datos, setDatos] = useState({
    IdEntidad: "",
    IdTipoEducacion: "",
    IdPersona: idPersona,
    IdHistorialMedico: "",
  });
  const [entidad, setEntidad] = useState([]);
  const [tipoEducacion, setTipoEducacion] = useState([]);
  const [historialMedico, setHistorial] = useState([]);

  const urlEntidad = `${ApiRoutes.baseURI}${ApiRoutes.Entidad}`;
  const urlTipoEducacion = `${ApiRoutes.baseURI}${ApiRoutes.TipoEducacion}`;
  const urlHistorial = `${ApiRoutes.baseURI}${ApiRoutes.EnfermedadesCubiertas}`;

  useEffect(() => {
    const FetchDataEntidad = async () => {
      const response = await window.fetch(urlEntidad);
      const data = await response.json();
      setEntidad(data.entidades);
    };
    const FetchDataEducacion = async () => {
      const respuesta = await window.fetch(urlTipoEducacion);
      const dataEd = await respuesta.json();
      setTipoEducacion(dataEd.entidades);
    };
    const FetchDataHistorial = async () => {
        const respuesta = await window.fetch(urlHistorial);
        const dataHist = await respuesta.json();
        setHistorial(dataHist.entidades);  
    }
    FetchDataEntidad();
    FetchDataEducacion();
    FetchDataHistorial();
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
      let funcionAg = agregarMenor;
      funcionAg(datos);
    }
  }
  const validar = () => {
    console.log(datos);
    if (
      datos.IdEntidad === "" ||
      datos.IdTipoEducacion === "" ||
      datos.IdHistorialMedico === "" 
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
              <Typography variant={"h2"}>Formulario Menor</Typography>
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
                <InputLabel id="label-historial">Historial Medico *</InputLabel>
                <Select
                  labelId="label-historial"
                  name="IdHistorialMedico"
                  fullWidth
                  required
                  onChange={cambiarInformacion}
                >
                  {historialMedico.map(f => (
                    <MenuItem required key={f._id} value={f._id}>
                      {f.NombreHistorialMedico}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
