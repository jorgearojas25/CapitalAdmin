const personaAdultaStore = require("../3.store/personaAdultaStore");
const config = require("../../config");
const objPersonaAdulta = require("../BOs/personaAdulta");

const AddPersonaAdulta = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objPersonaAdulta(body);
    resolve(personaAdultaStore.add(respuesta));
  });
};

const AddListPersonaAdulta = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const personaAdulta in body) {
    if (body.hasOwnProperty(personaAdulta)) {
      const element = body[personaAdulta];
      let savedElement = await personaAdultaStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetPersonaAdulta = body => {
  return new Promise((resolve, reject) => {
    resolve(personaAdultaStore.list(body));
  });
};

const UpdatePersonaAdulta = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await personaAdultaStore.update(body);
    resolve(response);
  });
};

const DeletePersonaAdulta = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await personaAdultaStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddPersonaAdulta,
  AddListPersonaAdulta,
  GetPersonaAdulta,
  UpdatePersonaAdulta,
  DeletePersonaAdulta
};
