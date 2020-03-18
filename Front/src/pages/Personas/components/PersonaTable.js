import React from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {Add as AddIcon} from "@material-ui/icons";

// components
import PageTitle from "../../../components/PageTitle";
import IconosTabla from "../../../components/TableIcons";


export default function PersonaTable({data, agregar}) {

  const agregarPersona = () => {
      let funcion = agregar;
      funcion();
   };
   
  if(data !== []) {
    return (
      <>
        <PageTitle title="Datos personales" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaterialTable 
              columns={[
                        {title: "Primer Nombre",field:"PrimerNombre"},
                        {title: "Segundo Nombre",field:"SegundoNombre"},
                        {title: "Primer Apellido",field:"PrimerApellido"},
                        {title: "Segundo Apellido",field:"SegundoApellido"},
                        {title: "Lugar Nacimiento", field:"LugarDeNacimiento"},
                        {title: "Fecha Nacimiento", field:"FechaDeNacimiento"},
                        {title: "Numero Identificacion", field:"NumeroIdentificacion"}]}
              data= {data}
              title={""}
              icons={IconosTabla}
              actions={[
                { 
                    icon: () => <AddIcon color="action"></AddIcon>,
                    tooltip: "Agregar",
                    onClick: () => agregarPersona()
                }]}
            /> 
          </Grid>

        </Grid> 
      </>
    );
  }

}
