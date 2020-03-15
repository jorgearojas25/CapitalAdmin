const personaMenorStore = require("../3.store/personaMenorStore");
const config = require("../../config");
const objPersonaMenor = require("../BOs/personaMenor");

const AddPersonaMenor = body => {
  return new Promise((resolve, reject) => {
    let respuesta = new objPersonaMenor(body);
    personaMenorStore.add(respuesta);
    resolve(personaMenorStore.add(respuesta));
  });
};

const AddListPersonaMenor = async body => {
  if(Array.isArray(body)){
    Promise.reject('Invalid array data')
  }
  let arraySaved = [];
  for (const personaMenor in body) {
    if (body.hasOwnProperty(personaMenor)) {
      const element = body[personaMenor];
      let savedElement = await personaMenorStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
}

const GetPersonaMenor = body => {
  return new Promise((resolve, reject) => {
    resolve(personaMenorStore.list(body));
  });
};

const UpdatePersonaMenor = body => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await personaMenorStore.update(body);
    resolve(response);
  });
};

const DeletePersonaMenor = _id => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await personaMenorStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddPersonaMenor,
  AddListPersonaMenor,
  GetPersonaMenor,
  UpdatePersonaMenor,
  DeletePersonaMenor
};
