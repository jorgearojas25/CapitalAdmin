import React, {useState, useEffect} from "react";
import { Grid, Dialog, DialogContent, DialogActions } from "@material-ui/core";
import MaterialTable from "material-table";
import {DirectionsBus, Check} from "@material-ui/icons";
import Maps from "../../pages/maps/Maps";
import { Button } from "../../components/Wrappers";
import {ApiRoutes} from "../../utils/APIRoutes";
// components
import PageTitle from "../../components/PageTitle";
import IconosTabla from "../../components/TableIcons";

export default function Barrios()  {

const [barrios, setBarrios] = useState([]);
const [open, setOpen] = React.useState(false);
const [fullWidth, setFullWidth] = React.useState(true);
const [maxWidth, setMaxWidth] = React.useState('sm');

const urlBarrios = `${ApiRoutes.baseURI}${ApiRoutes.Barrios}`;

useEffect(() => {
  const FetchData = async () => {
    const response = await window.fetch(urlBarrios)
    const data = await response.json()
    setBarrios(data.entidades);
  }
  FetchData();

},[]) 

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

console.log(barrios);
  if(barrios !== []) {
    return (
      <>
        <PageTitle title="Barrios" />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <MaterialTable style={{width:"95%", height:"90%"}}
              columns={[{title: "Nombre",
                        field:"NombreBarrio"},
                        {title: "Codigo Area", field:"IdArea"},
                        {title: "Tipo Barrio", field: "IdTipoBarrio.NombreTipoBarrio"},
                        {title: "Estrato Socio-Economico", field:"NivelSocioEconomico"},
                        {title: "Tiene Rutas", field:"TieneRutas", lookup:{true:
                              <Button
                              type='button'
                              color={"success"}
                              size="small"
                              className="px-2"
                              variant="contained"
                              onClick={() => handleClickOpen()}
                            >
                              <DirectionsBus></DirectionsBus>
                            </Button>
                          , false:"No"}}]}
              data= {barrios}
              title={"Informacion barrios"}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      setBarrios(prevState => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setBarrios(prevState => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      setBarrios(prevState => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }}
              icons={IconosTabla}            
            /> 
          </Grid>
          <Grid item xs={4} style={{paddingTop:"3%"}} >
            <Maps></Maps>
          </Grid>
        </Grid> 
        <Dialog 
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title">
            <DialogContent>
            <MaterialTable style={{width:"95%", height:"90%"}}
                        columns={[{title: "Nombre Ruta", field:"Rutas[0].NombreRuta"},
                                  {title: "Activa", field:"Rutas[0].Activo", lookup:{true:
                                        <Check></Check>
                                    , false:"No"}}]}
                        data= {barrios}
                        title={"Informacion Rutas"}
                        icons={IconosTabla}            
              /> 
            </DialogContent>
            <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      OK
                    </Button>
            </DialogActions>
          </Dialog>
      </>
    );
  }

}
