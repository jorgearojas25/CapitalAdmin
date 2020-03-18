import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {Check, Cancel} from "@material-ui/icons";
import {ApiRoutes} from "../../utils/APIRoutes";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import IconosTabla from "../../components/TableIcons";


export default function TipoActividadEconomica() {
const [tipoActividadEconomica, setTipoActividadEconomica] = useState([]);
const url = `${ApiRoutes.baseURI}${ApiRoutes.TipoActividadEconomica}`;
console.log(url);
useEffect(() => {
  const FetchData = async () => {
    const response = await window.fetch(url)
    const data = await response.json()
    setTipoActividadEconomica(data.entidades);
  }
  FetchData();

},[]) 

const agregarTipoActividadEconomica = async(data) => {
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

const eliminarTipoActividadEconomica = async(data) => {
  fetch(url+'/'+data, {
    method: 'DELETE', // or 'PUT'
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

const editarTipoActividadEconomica = async(data) => {
    console.log(data);
    fetch(url, {
      method: 'PATCH', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

console.log(tipoActividadEconomica);
  if(tipoActividadEconomica !== []) {
    return (
      <>
        <PageTitle title="Tipo Actividad Economica" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaterialTable 
              columns={[
                        {title: "Nombre",field:"NombreTipoActividadEconomica"},
                        {title: "Activo", field:"Activo", lookup:{true:<Check></Check>, false:<Cancel></Cancel>}}]}
              data= {tipoActividadEconomica}
              title={""}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...tipoActividadEconomica];
                      datos.push(newData);
                      agregarTipoActividadEconomica(newData).then(() => {
                        setTipoActividadEconomica(datos);
                      })
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        const datos = [...tipoActividadEconomica];
                        const index = datos.indexOf(oldData);
                        datos[index] =  newData;
                        editarTipoActividadEconomica(datos[index]).then(() => {
                            setTipoActividadEconomica(datos);
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...tipoActividadEconomica];
                      const datosAEliminar = datos[datos.indexOf(oldData)];
                      console.log(datosAEliminar._id);
                      eliminarTipoActividadEconomica(datosAEliminar._id).then(() => {
                        datos.splice(datos.indexOf(oldData),1);
                        setTipoActividadEconomica(datos);
                      })
                    }, 600);
                  }),
              }}
              icons={IconosTabla}
            /> 
          </Grid>

        </Grid> 
      </>
    );
  }

}
