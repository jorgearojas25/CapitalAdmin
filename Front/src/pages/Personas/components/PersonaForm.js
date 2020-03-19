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
import InputLabel from "@material-ui/core/InputLabel";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function PersonaForm({ abrir, cerrar, familia, agregarPersona }) {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");
  const [open, setOpen] = useState(abrir);
  const [datos, setDatos] = useState(
    {
      IdFamilia: 0,
      PrimerNombre: "",
      SegundoNombre: "",
      PrimerApellido: "",
      SegundoApellido: "",
      LugarDeNacimiento: "",
      FechaDeNacimiento: "",
      NumeroIdentificacion: "",
    },
  );

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
      let funcionAg = agregarPersona;
      funcionAg(datos);
    }
  }
  const validar = () => {
    console.log(datos);
    if (
      datos.PrimerNombre === "" ||
      datos.PrimerApellido === "" ||
      datos.NumeroIdentificacion === "" ||
      datos.LugarDeNacimiento === "" ||
      datos.FechaDeNacimiento === "" ||
      datos.IdFamilia === 0
    ) {
      alert("Tiene que llenar todos los campos obligatorios");
      return false
    } else {
      return true;
    }
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
                required
                fullWidth
                onChange={cambiarInformacion}
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
                    name="NumeroIdentificacion"
                    label="Numero de identificacion"
                    type="text"
                    required
                    fullWidth
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
                  label={datos.FechaDeNacimiento? "":"Fecha de Nacimiento"}
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
              <div style={{ paddingTop: "6.5%" }}>
                <InputLabel id="label-flia">Familia *</InputLabel>
                <Select
                  labelId="label-flia"
                  name="IdFamilia"
                  fullWidth
                  required
                  onChange={cambiarInformacion}
                >
                  {familia.map(f => (
                    <MenuItem required key={f._id} value={f._id}>
                      {f.NombreFamilia}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => agregar()} color="primary">
            Guardar
          </Button>
          <Button onClick={() => cerrarFormulario()} color="secondary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
