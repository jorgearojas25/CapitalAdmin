const areaStore = require("../3.store/areaStore");
const config = require("../../config");
const objArea = require("../BOs/area");

const AddArea = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objArea(body);
    areaStore.add(respuesta);
    resolve(areaStore.add(respuesta));
  });
};

const AddListArea = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const area in body) {
    if (body.hasOwnProperty(area)) {
      const element = body[area];
      let savedElement = await areaStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetArea = body => {
  return new Promise((resolve, reject) => {
    resolve(areaStore.list(body));
  });
};

const UpdateArea = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await areaStore.update(body);
    resolve(response);
  });
};

const DeleteArea = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await areaStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddArea,
  AddListArea,
  GetArea,
  UpdateArea,
  DeleteArea
};
