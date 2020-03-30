const actividadEconomicaStore = require("../3.store/actividadEconomicaStore");
const config = require("../../config");
const objActividadEconomica = require("../BOs/actividadEconomica");

const AddActividadEconomica = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objActividadEconomica(body);
    resolve(actividadEconomicaStore.add(respuesta));
  });
};

const AddListActividadEconomica = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const actividadEconomica in body) {
    if (body.hasOwnProperty(actividadEconomica)) {
      const element = body[actividadEconomica];
      let savedElement = await actividadEconomicaStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetActividadEconomica = body => {
  return new Promise((resolve, reject) => {
    resolve(actividadEconomicaStore.list(body));
  });
};

const UpdateActividadEconomica = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await actividadEconomicaStore.update(body);
    resolve(response);
  });
};

const DeleteActividadEconomica = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await actividadEconomicaStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddActividadEconomica,
  AddListActividadEconomica,
  GetActividadEconomica,
  UpdateActividadEconomica,
  DeleteActividadEconomica
};
