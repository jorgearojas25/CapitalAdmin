const tipoEducacionStore = require("../3.store/tipoEducacionStore");
const config = require("../../config");
const objTipoEducacion = require("../BOs/tipoEducacion");

const AddTipoEducacion = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objTipoEducacion(body);
    tipoEducacionStore.add(respuesta);
    resolve(tipoEducacionStore.add(respuesta));
  });
};

const AddListTipoEducacion = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const tipoEducacion in body) {
    if (body.hasOwnProperty(tipoEducacion)) {
      const element = body[tipoEducacion];
      let savedElement = await tipoEducacionStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetTipoEducacion = body => {
  return new Promise((resolve, reject) => {
    resolve(tipoEducacionStore.list(body));
  });
};

const UpdateTipoEducacion = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await tipoEducacionStore.update(body);
    resolve(response);
  });
};

const DeleteTipoEducacion = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await tipoEducacionStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddTipoEducacion,
  AddListTipoEducacion,
  GetTipoEducacion,
  UpdateTipoEducacion,
  DeleteTipoEducacion
};
