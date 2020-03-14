const tipoBarrioStore = require("../3.store/tipoBarrioStore");
const config = require("../../config");
const objTipoBarrio = require("../BOs/tipoBarrio");

const AddTipoBarrio = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objTipoBarrio(body);
    tipoBarrioStore.add(respuesta);
    resolve(tipoBarrioStore.add(respuesta));
  });
};

const AddListTipoBarrio = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const tipoBarrio in body) {
    if (body.hasOwnProperty(tipoBarrio)) {
      const element = body[tipoBarrio];
      let savedElement = await tipoBarrioStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetTipoBarrio = body => {
  return new Promise((resolve, reject) => {
    resolve(tipoBarrioStore.list(body));
  });
};

const UpdateTipoBarrio = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await tipoBarrioStore.update(body);
    resolve(response);
  });
};

const DeleteTipoBarrio = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await tipoBarrioStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddTipoBarrio,
  AddListTipoBarrio,
  GetTipoBarrio,
  UpdateTipoBarrio,
  DeleteTipoBarrio
};
