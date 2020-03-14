const tipoViviendaStore = require("../3.store/tipoViviendaStore");
const config = require("../../config");
const objTipoVivienda = require("../BOs/tipoVivienda");

const AddTipoVivienda = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objTipoVivienda(body);
    tipoViviendaStore.add(respuesta);
    resolve(tipoViviendaStore.add(respuesta));
  });
};

const AddListTipoVivienda = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const tipoVivienda in body) {
    if (body.hasOwnProperty(tipoVivienda)) {
      const element = body[tipoVivienda];
      let savedElement = await tipoViviendaStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetTipoVivienda = body => {
  return new Promise((resolve, reject) => {
    resolve(tipoViviendaStore.list(body));
  });
};

const UpdateTipoVivienda = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await tipoViviendaStore.update(body);
    resolve(response);
  });
};

const DeleteTipoVivienda = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await tipoViviendaStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddTipoVivienda,
  AddListTipoVivienda,
  GetTipoVivienda,
  UpdateTipoVivienda,
  DeleteTipoVivienda
};
