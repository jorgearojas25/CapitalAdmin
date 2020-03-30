const personaStore = require("../3.store/personaStore");
const config = require("../../config");
const objPersona = require("../BOs/persona");
const evaluarTipoPersona = require("./utils/EvaluarEdad");
const tipoPersonaController = require("./tipoPersonaController");

const AddPersona = body => {
  return new Promise(async (resolve, reject) => {
    let objAdd = new objPersona(body);
    let enumTipoPersona = evaluarTipoPersona(objAdd.FechaDeNacimiento);
    let tipoPersona =  definirTipoPersona(enumTipoPersona);
    let consultaTipoPersona = await tipoPersonaController.GetTipoPersona({NombreTipoPersona: tipoPersona});
    objAdd.IdTipoPersona = consultaTipoPersona[0]._id;
    console.log(consultaTipoPersona);
    let responseStore = await personaStore.add(objAdd);
    let respuesta = new objPersona(responseStore);
    respuesta.TipoPersona = enumTipoPersona;
    resolve(respuesta);
  });
};

const definirTipoPersona = tipoEnum => {
  let response = "";
  switch (tipoEnum) {
    case 1:
      response = "Menor";
      break;
    case 2:
      response = "Joven";
      break;
    case 3:
      response = "Adulto";
      break;
    default:
      break;
  }
  return response;
};

const AddListPersona = async body => {
  if (Array.isArray(body)) {
    Promise.reject("Invalid array data");
  }
  let arraySaved = [];
  for (const persona in body) {
    if (body.hasOwnProperty(persona)) {
      const element = body[persona];
      let savedElement = await personaStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
};

const GetPersona = body => {
  return new Promise((resolve, reject) => {
    resolve(personaStore.list(body));
  });
};

const UpdatePersona = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await personaStore.update(body);
    resolve(response);
  });
};

const DeletePersona = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await personaStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddPersona,
  AddListPersona,
  GetPersona,
  UpdatePersona,
  DeletePersona
};
