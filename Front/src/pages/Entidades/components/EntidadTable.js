import React from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {Add as AddIcon} from "@material-ui/icons";

// components
import PageTitle from "../../../components/PageTitle";
import IconosTabla from "../../../components/TableIcons";


export default function EntidadTable({data, abrirFormulario}) {

  const abrirEntidad = () => {
      let funcion = abrirFormulario;
      funcion();
   };
   
  if(data !== []) {
    return (
      <>
        <PageTitle title="Datos entidad" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaterialTable 
              columns={[
                        {title: "Nombre Entidad",field:"NombreEntidad"},
                        {title: "Actividad Economica",field:"IdActividadEconomica.NombreTipoActividadEconomica"},
                        {title: "Tipo Entidad",field:"IdTipoEntidad.NombreTipoEntidad"},
                        {title: "Barrio",field:"IdBarrio.NombreBarrio"},
                        ]}
              data= {data}
              title={""}
              icons={IconosTabla}
              actions={[
                { 
                    icon: () => <AddIcon color="action"></AddIcon>,
                    tooltip: "Agregar",
                    isFreeAction:true,
                    onClick: () => abrirEntidad()
                }]}
            /> 
          </Grid>

        </Grid> 
      </>
    );
  }

}
