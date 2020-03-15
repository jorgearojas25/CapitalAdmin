const personaStore = require("../3.store/personaStore");
const config = require("../../config");
const objPersona = require("../BOs/persona");

const AddPersona = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objPersona(body);
    resolve(personaStore.add(respuesta));
  });
};

const AddListPersona = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
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
}

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
