const historialMedicoStore = require("../3.store/historialMedicoStore");
const config = require("../../config");
const objHistorialMedico = require("../BOs/historialMedico");

const AddHistorialMedico = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objHistorialMedico(body);
    historialMedicoStore.add(respuesta);
    resolve(historialMedicoStore.add(respuesta));
  });
};

const AddListHistorialMedico = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const historialMedico in body) {
    if (body.hasOwnProperty(historialMedico)) {
      const element = body[historialMedico];
      let savedElement = await historialMedicoStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetHistorialMedico = body => {
  return new Promise((resolve, reject) => {
    resolve(historialMedicoStore.list(body));
  });
};

const UpdateHistorialMedico = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await historialMedicoStore.update(body);
    resolve(response);
  });
};

const DeleteHistorialMedico = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await historialMedicoStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddHistorialMedico,
  AddListHistorialMedico,
  GetHistorialMedico,
  UpdateHistorialMedico,
  DeleteHistorialMedico
};
