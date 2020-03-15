const tipoEntidadStore = require("../3.store/tipoEntidadStore");
const config = require("../../config");
const objTipoEntidad = require("../BOs/tipoEntidad");

const AddTipoEntidad = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objTipoEntidad(body);
    resolve(tipoEntidadStore.add(respuesta));
  });
};

const AddListTipoEntidad = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const tipoEntidad in body) {
    if (body.hasOwnProperty(tipoEntidad)) {
      const element = body[tipoEntidad];
      let savedElement = await tipoEntidadStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetTipoEntidad = body => {
  return new Promise((resolve, reject) => {
    resolve(tipoEntidadStore.list(body));
  });
};

const UpdateTipoEntidad = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await tipoEntidadStore.update(body);
    resolve(response);
  });
};

const DeleteTipoEntidad = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await tipoEntidadStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddTipoEntidad,
  AddListTipoEntidad,
  GetTipoEntidad,
  UpdateTipoEntidad,
  DeleteTipoEntidad
};
