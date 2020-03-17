const entidadStore = require("../3.store/entidadStore");
const config = require("../../config");
const objEntidad = require("../BOs/entidad");

const AddEntidad = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objEntidad(body);
    resolve(entidadStore.add(respuesta));
  });
};

const AddListEntidad = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const entidad in body) {
    if (body.hasOwnProperty(entidad)) {
      const element = body[entidad];
      let savedElement = await entidadStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetEntidad = body => {
  return new Promise((resolve, reject) => {
    resolve(entidadStore.list(body));
  });
};

const UpdateEntidad = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await entidadStore.update(body);
    resolve(response);
  });
};

const DeleteEntidad = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await entidadStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddEntidad,
  AddListEntidad,
  GetEntidad,
  UpdateEntidad,
  DeleteEntidad
};
