import React, { useState, useEffect } from "react";
import PersonaTable from "./components/PersonaTable";
import { Add as AddIcon } from "@material-ui/icons";
import PersonaForm from "./components/PersonaForm";
import PersonaMenorForm from "./components/PersonaMenorForm";
import PersonaJovenForm from "./components/PersonaJovenForm";
import PersonaAdultaForm from "./components/PersonaAdultaForm";

export default function Personas() {
  const [persona, setPersona] = useState([]);
  const [abrir, setAbrir] = useState(false);
  const [familia, setFamilia] = useState([]);
  const [formMenor, setFormMenor] = useState(false);
  const [formJoven, setFormJoven] = useState(false);
  const [formAdulto, setFormAdulto] = useState(false);

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

  const abrirFormularioTipo = (tipoForm) => {
    if (tipoForm === 1) {
        setFormMenor(true);
    }
    if (tipoForm === 2) {
        setFormJoven(true);
    }
    if (tipoForm === 3) {
       setFormAdulto(true);
    }
  }

  const agregarPersona = async (data) => {
    debugger;
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => abrirFormularioTipo(res.json().entidades))
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
      <PersonaTable data={persona} agregar={abrirFormulario}></PersonaTable>
      {abrir && familia ? (
        <PersonaForm abrir={abrir}
         cerrar={cerrarFormulario} familia={familia} agregarPersona = {agregarPersona}
         ></PersonaForm>
      ) : (
        false
      )}
      {formMenor? (
        <PersonaMenorForm></PersonaMenorForm>
      ):(false)}
      {formJoven? (
        <PersonaJovenForm></PersonaJovenForm>
      ):(false)}
      {formAdulto?(
        <PersonaAdultaForm></PersonaAdultaForm>
      ):(false)}
      
    </>
  );
}
