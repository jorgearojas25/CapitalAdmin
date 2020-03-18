import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import {Check, Cancel} from "@material-ui/icons";
import {ApiRoutes} from "../../utils/APIRoutes";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import IconosTabla from "../../components/TableIcons";


export default function Rutas() {
const [rutas, setRutas] = useState([]);
const url = `${ApiRoutes.baseURI}${ApiRoutes.Rutas}`;
useEffect(() => {
  const FetchData = async () => {
    const response = await window.fetch(url)
    const data = await response.json()
    setRutas(data.entidades);
  }
  FetchData();

},[]) 

const agregarRutas = async(data) => {
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

const eliminarRutas = async(data) => {
  fetch(url+'/'+data, {
    method: 'DELETE', // or 'PUT'
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

const editarRutas = async(data) => {
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

console.log(rutas);
  if(rutas !== []) {
    return (
      <>
        <PageTitle title="Rutas" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaterialTable 
              columns={[
                        {title: "Nombre",field:"NombreRuta"},
                        {title: "Activo", field:"Activo", lookup:{true:<Check></Check>, false:<Cancel></Cancel>}}]}
              data= {rutas}
              title={""}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...rutas];
                      datos.push(newData);
                      agregarRutas(newData).then(() => {
                        setRutas(datos);
                      })
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        const datos = [...rutas];
                        const index = datos.indexOf(oldData);
                        datos[index] =  newData;
                        editarRutas(datos[index]).then(() => {
                            setRutas(datos);
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const datos = [...rutas];
                      const datosAEliminar = datos[datos.indexOf(oldData)];
                      console.log(datosAEliminar._id);
                      eliminarRutas(datosAEliminar._id).then(() => {
                        datos.splice(datos.indexOf(oldData),1);
                        setRutas(datos);
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
