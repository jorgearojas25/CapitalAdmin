import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {Check, Cancel} from "@material-ui/icons";
import {ApiRoutes} from "../../utils/APIRoutes";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import IconosTabla from "../../components/TableIcons";


export default function TipoEducacion() {
const [tipoEducacion, setTipoEducacion] = useState([]);
const url = `${ApiRoutes.baseURI}${ApiRoutes.TipoEducacion}`;
useEffect(() => {
  const FetchData = async () => {
    const response = await window.fetch(url)
    const data = await response.json()
    setTipoEducacion(data.entidades);
  }
  FetchData();

},[]) 

const agregarTipoEducacion = async(data) => {
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

const eliminarTipoEducacion = async(data) => {
  fetch(url+'/'+data, {
    method: 'DELETE', // or 'PUT'
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

const editarTipoEducacion = async(data) => {
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

console.log(tipoEducacion);
  if(tipoEducacion !== []) {
    return (
      <>
        <PageTitle title="Tipo Educacion" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaterialTable 
              columns={[
                        {title: "Nombre",field:"NombreTipoEducacion"},
                        {title: "Activo", field:"Activo", lookup:{true:<Check></Check>, false:<Cancel></Cancel>}}]}
              data= {tipoEducacion}
              title={""}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...tipoEducacion];
                      datos.push(newData);
                      agregarTipoEducacion(newData).then(() => {
                        setTipoEducacion(datos);
                      })
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        const datos = [...tipoEducacion];
                        const index = datos.indexOf(oldData);
                        datos[index] =  newData;
                        editarTipoEducacion(datos[index]).then(() => {
                            setTipoEducacion(datos);
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...tipoEducacion];
                      const datosAEliminar = datos[datos.indexOf(oldData)];
                      console.log(datosAEliminar._id);
                      eliminarTipoEducacion(datosAEliminar._id).then(() => {
                        datos.splice(datos.indexOf(oldData),1);
                        setTipoEducacion(datos);
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
