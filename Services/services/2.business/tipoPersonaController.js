const tipoPersonaStore = require("../3.store/tipoPersonaStore");
const config = require("../../config");
const objTipoPersona = require("../BOs/tipoPersona");

const AddTipoPersona = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objTipoPersona(body);
    resolve(tipoPersonaStore.add(respuesta));
  });
};

const AddListTipoPersona = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const tipoPersona in body) {
    if (body.hasOwnProperty(tipoPersona)) {
      const element = body[tipoPersona];
      let savedElement = await tipoPersonaStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetTipoPersona = body => {
  return new Promise((resolve, reject) => {
    resolve(tipoPersonaStore.list(body));
  });
};

const UpdateTipoPersona = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await tipoPersonaStore.update(body);
    resolve(response);
  });
};

const DeleteTipoPersona = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await tipoPersonaStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddTipoPersona,
  AddListTipoPersona,
  GetTipoPersona,
  UpdateTipoPersona,
  DeleteTipoPersona
};
