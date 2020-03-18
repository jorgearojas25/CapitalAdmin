import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {Check, Cancel} from "@material-ui/icons";
import {ApiRoutes} from "../../utils/APIRoutes";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import IconosTabla from "../../components/TableIcons";


export default function TipoBarrio() {
const [tipoBarrio, setTipoBarrio] = useState([]);
const url = `${ApiRoutes.baseURI}${ApiRoutes.TipoBarrio}`;
useEffect(() => {
  const FetchData = async () => {
    const response = await window.fetch(url)
    const data = await response.json()
    setTipoBarrio(data.entidades);
  }
  FetchData();

},[]) 

const agregarTipoBarrio = async(data) => {
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

const eliminarTipoBarrio = async(data) => {
  fetch(url+'/'+data, {
    method: 'DELETE', // or 'PUT'
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

const editarTipoBarrio = async(data) => {
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

console.log(tipoBarrio);
  if(tipoBarrio !== []) {
    return (
      <>
        <PageTitle title="Tipo Barrio" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaterialTable 
              columns={[
                        {title: "Nombre",field:"NombreTipoBarrio"},
                        {title: "Activo", field:"Activo", lookup:{true:<Check></Check>, false:<Cancel></Cancel>}}]}
              data= {tipoBarrio}
              title={""}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...tipoBarrio];
                      datos.push(newData);
                      agregarTipoBarrio(newData).then(() => {
                        setTipoBarrio(datos);
                      })
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        const datos = [...tipoBarrio];
                        const index = datos.indexOf(oldData);
                        datos[index] =  newData;
                        editarTipoBarrio(datos[index]).then(() => {
                            setTipoBarrio(datos);
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...tipoBarrio];
                      const datosAEliminar = datos[datos.indexOf(oldData)];
                      console.log(datosAEliminar._id);
                      eliminarTipoBarrio(datosAEliminar._id).then(() => {
                        datos.splice(datos.indexOf(oldData),1);
                        setTipoBarrio(datos);
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
