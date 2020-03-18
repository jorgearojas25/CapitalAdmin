import React, { useState, useEffect } from "react";
import PersonaTable from "./components/PersonaTable";
import { Add as AddIcon } from "@material-ui/icons";
import PersonaForm from "./components/PersonaForm";

export default function Personas() {
  const [persona, setPersona] = useState([]);
  const [abrir, setAbrir] = useState(false);
  const [familia, setFamilia] = useState([]);

  const url = "http://localhost:5500/Persona";
  const url2 = "http://localhost:5500/Familia";

  useEffect(() => {
    const FetchData = async () => {
      const response = await window.fetch(url);
      const data = await response.json();
      setPersona(data.entidades);
    };
    const FetchDataFamilia = async () => {
        const respuesta = await window.fetch(url2);
        const dataFamilia = await respuesta.json();
        setFamilia(dataFamilia.entidades);
    }
    FetchData();
    FetchDataFamilia();
  }, []);

  const abrirFormulario = () => {
    setAbrir(true);
  };

  const cerrarFormulario = () => {
    setAbrir(false);
  };


  const agregarPersona = async data => {
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  const eliminarPersona = async data => {
    fetch(url + "/" + data, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  const editarPersona = async data => {
    console.log(data);
    fetch(url, {
      method: "PATCH", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  return (
    <>
      <PersonaTable data={persona} agregar={abrirFormulario}></PersonaTable>(
      {abrir && familia ? (
        <PersonaForm abrir={abrir}
         cerrar={cerrarFormulario} familia={familia} 
         ></PersonaForm>
      ) : (
        false
      )}
      )
    </>
  );
}
