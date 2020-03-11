const store = require("./store");
const config = require('../../config');

const AddMesagge = (user, message, chat, file, body) => {
  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      console.log("[messageController] No hay usuario o mensaje");
      reject("Los datos son incorrectos");
      return false;
    }
    console.log(body);
    let fileUrl = "";
    if (file) {
      fileUrl = `${config.host}:${config.port}${config.publicRoute}${config.filesRoute}/${file.filename}`;
    }
    let respuesta = {
      chat: chat,
      user: user,
      date: new Date(),
      message: message,
      file: fileUrl
    };
    store.add(respuesta);

    resolve(respuesta);
  });
};

const GetMessage = filterUser => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

const UpdateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalida data");
      return false;
    }
    const response = await store.updateText(id, message);

    resolve(response);
  });
};

const DeleteMessage = id => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id invalido");
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });
  });
};

module.exports = {
  AddMesagge,
  GetMessage,
  UpdateMessage,
  DeleteMessage
};
