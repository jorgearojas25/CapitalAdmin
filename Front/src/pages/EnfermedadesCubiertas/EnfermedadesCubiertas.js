import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {Check, Cancel} from "@material-ui/icons";
import {ApiRoutes} from "../../utils/APIRoutes";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import IconosTabla from "../../components/TableIcons";


export default function EnfermedadesCubiertas() {
const [enfermedadesCubiertas, setEnfermedadesCubiertas] = useState([]);
const url = `${ApiRoutes.baseURI}${ApiRoutes.EnfermedadesCubiertas}`;
useEffect(() => {
  const FetchData = async () => {
    const response = await window.fetch(url)
    const data = await response.json()
    setEnfermedadesCubiertas(data.entidades);
  }
  FetchData();

},[]) 

const agregarEnfermedadesCubiertas = async(data) => {
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

const eliminarEnfermedadesCubiertas = async(data) => {
  fetch(url+'/'+data, {
    method: 'DELETE', // or 'PUT'
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

const editarEnfermedadesCubiertas = async(data) => {
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

console.log(enfermedadesCubiertas);
  if(enfermedadesCubiertas !== []) {
    return (
      <>
        <PageTitle title="Enfermedades Cubiertas" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaterialTable 
              columns={[
                        {title: "Nombre",field:"NombreHistorialMedico"},
                        {title: "Activo", field:"Activo", lookup:{true:<Check></Check>, false:<Cancel></Cancel>}}]}
              data= {enfermedadesCubiertas}
              title={""}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...enfermedadesCubiertas];
                      datos.push(newData);
                      agregarEnfermedadesCubiertas(newData).then(() => {
                        setEnfermedadesCubiertas(datos);
                      })
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        const datos = [...enfermedadesCubiertas];
                        const index = datos.indexOf(oldData);
                        datos[index] =  newData;
                        editarEnfermedadesCubiertas(datos[index]).then(() => {
                            setEnfermedadesCubiertas(datos);
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...enfermedadesCubiertas];
                      const datosAEliminar = datos[datos.indexOf(oldData)];
                      console.log(datosAEliminar._id);
                      eliminarEnfermedadesCubiertas(datosAEliminar._id).then(() => {
                        datos.splice(datos.indexOf(oldData),1);
                        setEnfermedadesCubiertas(datos);
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
