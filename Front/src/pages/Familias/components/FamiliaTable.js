import React from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {Add as AddIcon} from "@material-ui/icons";

// components
import PageTitle from "../../../components/PageTitle";
import IconosTabla from "../../../components/TableIcons";


export default function FamiliaTable({data, abrirFormulario}) {

  const abrirFamilia = () => {
      let funcion = abrirFormulario;
      funcion();
   };
   
  if(data !== []) {
    return (
      <>
        <PageTitle title="Datos familia" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaterialTable 
              columns={[
                        {title: "Nombre Familia",field:"NombreFamilia"},
                        {title: "Calle",field:"Calle"},
                        {title: "Numero",field:"Numero"},
                        {title: "Telefono",field:"Numero"},
                        {title: "Tipo Vivienda",field:"IdTipoVivienda.NombreTipoVivienda"},
                        {title: "Barrio",field:"IdBarrio.NombreBarrio"},
                        {title: "Ingreso Familiar",field:"IngresoFamiliar"},
                        ]}
              data= {data}
              title={""}
              icons={IconosTabla}
              actions={[
                { 
                    icon: () => <AddIcon color="action"></AddIcon>,
                    tooltip: "Agregar",
                    isFreeAction:true,
                    onClick: () => abrirFamilia()
                }]}
            /> 
          </Grid>

        </Grid> 
      </>
    );
  }

}