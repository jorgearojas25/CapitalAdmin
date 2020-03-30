import React, { useEffect, useState } from "react";
import EntidadTable from "./components/EntidadTable";
import { ApiRoutes } from "../../utils/APIRoutes";

export default function Entidades() {
  const [entidad, setEntidad] = useState([]);
  const [abrir, setAbrir] = useState(false);

  const urlEntidad = `${ApiRoutes.baseURI}${ApiRoutes.Entidad}`;

  useEffect(() => {
    const FetchData = async () => {
      const response = await window.fetch(urlEntidad);
      const data = await response.json();
      setEntidad(data.entidades);
    };
    FetchData();
  }, []);

  const abrirFormulario = () => {
    setAbrir(true);
  };

  const cerrarFormulario = () => {
    setAbrir(false);
  };

  return (
    <>
      <EntidadTable
        data={entidad}
        abrirFormulario={abrirFormulario}
      ></EntidadTable>
    </>
  );
}
