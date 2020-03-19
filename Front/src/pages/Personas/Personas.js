import React, { useState, useEffect } from "react";
import PersonaTable from "./components/PersonaTable";
import { Add as AddIcon } from "@material-ui/icons";
import PersonaForm from "./components/PersonaForm";
import PersonaMenorForm from "./components/PersonaMenorForm";
import PersonaJovenForm from "./components/PersonaJovenForm";
import PersonaAdultaForm from "./components/PersonaAdultaForm";
import {ApiRoutes} from "../../utils/APIRoutes";

export default function Personas() {
  const [persona, setPersona] = useState([]);
  const [abrir, setAbrir] = useState(false);
  const [familia, setFamilia] = useState([]);
  const [formMenor, setFormMenor] = useState(false);
  const [formJoven, setFormJoven] = useState(false);
  const [formAdulto, setFormAdulto] = useState(false);
  const [idPersona, setIdPersona] = useState("");

  const urlPersona = `${ApiRoutes.baseURI}${ApiRoutes.Persona}`;
  const urlFamilia = `${ApiRoutes.baseURI}${ApiRoutes.Familia}`;
  const urlJoven = `${ApiRoutes.baseURI}${ApiRoutes.PersonaJoven}`;
  const urlMenor = `${ApiRoutes.baseURI}${ApiRoutes.PersonaMenor}`;

  useEffect(() => {
    const FetchData = async () => {
      const response = await window.fetch(urlPersona);
      const data = await response.json();
      setPersona(data.entidades);
    };
    const FetchDataFamilia = async () => {
      const respuesta = await window.fetch(urlFamilia);
      const dataFamilia = await respuesta.json();
      setFamilia(dataFamilia.entidades);
    };
    FetchData();
    FetchDataFamilia();
  }, []);

  const abrirFormulario = () => {
    setAbrir(true);
  };

  const cerrarFormulario = () => {
    setAbrir(false);
  };

  const cerrarFormularioJoven = () => {
    setFormJoven(false);
  };

  const cerrarFormularioMenor = () => {
    setFormMenor(false);
  };

  const abrirFormularioTipo = tipoForm => {
    if (tipoForm.TipoPersona === 1) {
      setAbrir(false);
      setFormMenor(true);
    }
    if (tipoForm.TipoPersona === 2) {
      setAbrir(false);
      setFormJoven(true);
    }
    if (tipoForm.TipoPersona === 3) {
      setAbrir(false);
      setFormAdulto(true);
    }
  };

  const agregarJoven = async data => {
    const respuesta = await fetch(urlJoven, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respData = await respuesta.json();
    console.log("Esta es la respuesta de joven " + respData);
  };

  const agregarMenor = async data => {
    const respuesta = await fetch(urlMenor, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respData = await respuesta.json();
    console.log("Esta es la respuesta de menor " + respData);
  }
  const agregarPersona = async data => {
    const respuesta = await fetch(urlPersona, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      }
    });
    const respData = await respuesta.json();
    setIdPersona(respData.entidades._id);
    abrirFormularioTipo(respData.entidades);
  };

  const eliminarPersona = async data => {
    fetch(urlPersona + "/" + data, {
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
    fetch(urlPersona, {
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
        <PersonaForm
          abrir={abrir}
          cerrar={cerrarFormulario}
          familia={familia}
          agregarPersona={agregarPersona}
        ></PersonaForm>
      ) : (
        false
      )}
      {formMenor ? (
        <PersonaMenorForm
          abrir={formMenor}
          cerrar={cerrarFormularioMenor}
          idPersona={idPersona}
          agregarMenor={agregarMenor}
        ></PersonaMenorForm>
      ) : (
        false
      )}
      {formJoven ? (
        <PersonaJovenForm
          abrir={formJoven}
          cerrar={cerrarFormularioJoven}
          idPersona={idPersona}
          agregarJoven={agregarJoven}
        ></PersonaJovenForm>
      ) : (
        false
      )}
      {formAdulto ? <PersonaAdultaForm></PersonaAdultaForm> : false}
    </>
  );
}
