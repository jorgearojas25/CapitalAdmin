import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {Check, Cancel} from "@material-ui/icons";
import {ApiRoutes} from "../../utils/APIRoutes";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import IconosTabla from "../../components/TableIcons";


export default function TipoVivienda() {
const [tipoVivienda, setTipoVivienda] = useState([]);
const url = `${ApiRoutes.baseURI}${ApiRoutes.TipoVivienda}`
useEffect(() => {
  const FetchData = async () => {
    const response = await window.fetch(url)
    const data = await response.json()
    setTipoVivienda(data.entidades);
  }
  FetchData();

},[]) 

const agregarTipoVivienda = async(data) => {
  const url = `${ApiRoutes.baseURI}${ApiRoutes.TipoVivienda}`
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

const eliminarTipoVivienda = async(data) => {
  const url = `${ApiRoutes.baseURI}${ApiRoutes.TipoVivienda}${data}`  
  fetch(url, {
    method: 'DELETE', // or 'PUT'
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

const editarTipoVivienda = async(data) => {
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

console.log(tipoVivienda);
  if(tipoVivienda !== []) {
    return (
      <>
        <PageTitle title="Tipo Vivienda" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaterialTable 
              columns={[
                        {title: "Nombre",field:"NombreTipoVivienda"},
                        {title: "Activo", field:"Activo", lookup:{true:<Check></Check>, false:<Cancel></Cancel>}}]}
              data= {tipoVivienda}
              title={""}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...tipoVivienda];
                      datos.push(newData);
                      agregarTipoVivienda(newData).then(() => {
                        setTipoVivienda(datos);
                      })
                    }, 600);
                  }),
                  onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        const datos = [...tipoVivienda];
                        const index = datos.indexOf(oldData);
                        datos[index] =  newData;
                        editarTipoVivienda(datos[index]).then(() => {
                            setTipoVivienda(datos);
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...tipoVivienda];
                      const datosAEliminar = datos[datos.indexOf(oldData)];
                      console.log(datosAEliminar._id);
                      eliminarTipoVivienda(datosAEliminar._id).then(() => {
                        datos.splice(datos.indexOf(oldData),1);
                        setTipoVivienda(datos);
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
