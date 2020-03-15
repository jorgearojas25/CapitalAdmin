const personaJovenStore = require("../3.store/personaJovenStore");
const config = require("../../config");
const objPersonaJoven = require("../BOs/personaJoven");

const AddPersonaJoven = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objPersonaJoven(body);
    resolve(personaJovenStore.add(respuesta));
  });
};

const AddListPersonaJoven = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const personaJoven in body) {
    if (body.hasOwnProperty(personaJoven)) {
      const element = body[personaJoven];
      let savedElement = await personaJovenStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetPersonaJoven = body => {
  return new Promise((resolve, reject) => {
    resolve(personaJovenStore.list(body));
  });
};

const UpdatePersonaJoven = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await personaJovenStore.update(body);
    resolve(response);
  });
};

const DeletePersonaJoven = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await personaJovenStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddPersonaJoven,
  AddListPersonaJoven,
  GetPersonaJoven,
  UpdatePersonaJoven,
  DeletePersonaJoven
};
