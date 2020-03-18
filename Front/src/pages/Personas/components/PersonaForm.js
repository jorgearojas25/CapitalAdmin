import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function PersonaForm({ abrir, cerrar, familia }) {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");
  const [open, setOpen] = useState(abrir);
  const [datos, setDatos] = useState([
    {
      IdFamilia: 0,
      PrimerNombre: "",
      SegundoNombre: "",
      PrimerApellido: "",
      SegundoApellido: "",
      LugarDeNacimiento: "",
      FechaDeNacimiento: "",
      NumeroDeIdentificacion: "",
    },
  ]);

  const cerrarFormulario = () => {
    let funcion = cerrar;
    funcion();
  };
  const cambiarInformacion = ({ target }) => {
    console.log(target);
    const { checked, name, type, value } = target;
    setDatos({ ...datos, [name]: type === "checkbox" ? checked : value });
  };

  const validarDatos = () => {
    if (
      datos.PrimerNombre === null ||
      datos.PrimerApellido === null ||
      datos.LugarDeNacimiento === null ||
      datos.FechaDeNacimiento === null ||
      datos.NumeroDeIdentificacion === null
    ) {
      alert("Debes llenar todos los campos obligatorios");
      return false;
    }
    return true;
  };

  return (
    <>
      {/* <Button variant="outlined" color="primary" onClick={open}>
        Open max-width dialog
      </Button> */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={() => cerrarFormulario()}
        aria-labelledby="dialog-form-title"
      >
        <DialogTitle id="dialog-form">Datos Personales</DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <TextField
                autoFocus
                margin="dense"
                name="PrimerNombre"
                label="Primer Nombre"
                type="text"
                fullWidth
                value={datos.PrimerNombre}
                onChange={e =>
                  cambiarInformacion({
                    target: { name: "PrimerNombre", value: e },
                  })
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                autoFocus
                margin="dense"
                name="SegundoNombre"
                label="Segundo Nombre"
                type="text"
                fullWidth
                value={datos.SegundoNombre}
                onChange={cambiarInformacion}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                autoFocus
                margin="dense"
                name="PrimerApellido"
                label="Primer Apellido"
                type="text"
                fullWidth
                required
                value={datos.PrimerApellido}
                onChange={cambiarInformacion}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                autoFocus
                margin="dense"
                name="SegundoApellido"
                label="Segundo Apellido"
                type="text"
                fullWidth
                value={datos.SegundoApellido}
                onChange={cambiarInformacion}
              />
            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={2} style={{ paddingTop: "7.6%" }}>
                  <Select autoFocus>
                    <MenuItem value="cc">cc</MenuItem>
                    <MenuItem value="ti">ti</MenuItem>
                    <MenuItem value="pa">pa</MenuItem>
                    <MenuItem value="rc">rc</MenuItem>
                    <MenuItem value="ce">ce</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="NumeroDeIdentificacion"
                    label="Numero de identificacion"
                    type="text"
                    required
                    fullWidth
                    value={datos.NumeroDeIdentificacion}
                    onChange={cambiarInformacion}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <TextField
                autoFocus
                margin="dense"
                name="LugarDeNacimiento"
                label="Lugar de nacimiento"
                type="text"
                value={datos.LugarDeNacimiento}
                fullWidth
                required
                onChange={cambiarInformacion}
              />
            </Grid>
            <Grid item xs={4}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  name="FechaDeNacimiento"
                  label="Fecha Nacimiento"
                  required
                  format="MM/dd/yyyy"
                  value={datos.FechaDeNacimiento}
                  onChange={fecha =>
                    // tslint:disable-next-line:no-object-literal-type-assertion
                    cambiarInformacion({
                      target: { name: "FechaDeNacimiento", value: fecha },
                    })
                  }
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={4}>
                <List>{familia.map((f) => (<ListItem key={f._id} name="IdFamilia" onChange={cambiarInformacion}>{f.Nombre}</ListItem>))}</List>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => validarDatos()}></Button>
          <Button onClick={() => cerrarFormulario()} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
