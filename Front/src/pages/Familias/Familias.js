
import React, { useEffect, useState } from "react";
import FamiliaTable from "./components/FamiliaTable";
import { ApiRoutes } from "../../utils/APIRoutes";

export default function Entidades() {
  const [familia, setFamilia] = useState([]);
  const [abrir, setAbrir] = useState(false);

  const urlFamilia = `${ApiRoutes.baseURI}${ApiRoutes.Familia}`;

  useEffect(() => {
    const FetchData = async () => {
      const response = await window.fetch(urlFamilia);
      const data = await response.json();
      setFamilia(data.entidades);
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
      <FamiliaTable
        data={familia}
        abrirFormulario={abrirFormulario}
      ></FamiliaTable>
    </>
  );
}
