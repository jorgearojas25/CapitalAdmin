const PersonasController = require("../personaController");
const TipoPersonaController = require("../tipoPersonaController");
const objCantidadPersonas = require("../../BOs/Data/CantidadPersonas");

const GetNumeroPersonasPorTipo = async body => {
  let Personas = await PersonasController.GetPersona({});
  let TiposPersonas = [];
  let ConsultaTiposPersonas = await TipoPersonaController.GetTipoPersona(
    {}
  ).then(data =>
    data.forEach(element => {
      TiposPersonas.push(element._id);
    })
  );
  let results = Personas.reduce((results, persona) => {
    (results[persona.IdTipoPersona._id] =
      results[persona.IdTipoPersona._id] || []).push(persona);
    return results;
  }, {});
  let respuesta = [];

  for (const tipoP in results) {
    if (results.hasOwnProperty(tipoP)) {
      const element = results[tipoP];
      console.log(element);
      let objData = new objCantidadPersonas({
        TipoPersonas: element[0].IdTipoPersona.NombreTipoPersona,
        CantidadPersonas: element.length
      });
      respuesta.push(objData);
    }
  }

  return respuesta;
};

module.exports = {
  GetNumeroPersonasPorTipo
};
