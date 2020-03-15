const familiaStore = require("../3.store/familiaStore");
const config = require("../../config");
const objFamilia = require("../BOs/familia");

const AddFamilia = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objFamilia(body);
    resolve(familiaStore.add(respuesta));
  });
};

const AddListFamilia = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const familia in body) {
    if (body.hasOwnProperty(familia)) {
      const element = body[familia];
      let savedElement = await familiaStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetFamilia = body => {
  return new Promise((resolve, reject) => {
    resolve(familiaStore.list(body));
  });
};

const UpdateFamilia = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await familiaStore.update(body);
    resolve(response);
  });
};

const DeleteFamilia = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await familiaStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddFamilia,
  AddListFamilia,
  GetFamilia,
  UpdateFamilia,
  DeleteFamilia
};
