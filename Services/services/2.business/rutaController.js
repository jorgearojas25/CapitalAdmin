const rutaStore = require("../3.store/rutaStore");
const config = require("../../config");
const objRuta = require("../BOs/ruta");

const AddRuta = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objRuta(body);
    rutaStore.add(respuesta);
    resolve(rutaStore.add(respuesta));
  });
};

const AddListRuta = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const ruta in body) {
    if (body.hasOwnProperty(ruta)) {
      const element = body[ruta];
      let savedElement = await rutaStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetRuta = body => {
  return new Promise((resolve, reject) => {
    resolve(rutaStore.list(body));
  });
};

const UpdateRuta = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await rutaStore.update(body);
    resolve(response);
  });
};

const DeleteRuta = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await rutaStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddRuta,
  AddListRuta,
  GetRuta,
  UpdateRuta,
  DeleteRuta
};
