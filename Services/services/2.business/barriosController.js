const barriosStore = require("../3.store/barriosStore");
const config = require("../../config");
const objBarrios = require("../BOs/barrios");

const AddBarrios = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objBarrios(body);
    barriosStore.add(respuesta);
    resolve(barriosStore.add(respuesta));
  });
};

const GetBarrios = body => {
  return new Promise((resolve, reject) => {
    resolve(barriosStore.list(body));
  });
};

const UpdateBarrios = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await barriosStore.update(body);
    resolve(response);
  });
};

const DeleteBarrios = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await barriosStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddBarrios,
  GetBarrios,
  UpdateBarrios,
  DeleteBarrios
};
