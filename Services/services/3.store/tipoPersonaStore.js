const Model = require("../Models/tipoPersonaModel");
const mongoose = require('mongoose');

const AddTipoPersona = async tipoPersona => {
  tipoPersona._id = new mongoose.Types.ObjectId;
  const myTipoPersona = new Model(tipoPersona);
  return await myTipoPersona.save();
};

const GetTipoPersona = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const tipoPersona = await Model.find(filter);
  return tipoPersona;
};

const UpdateTipoPersona = async body => {
  const foundTipoPersona = Model.findById(body._id);
  foundTipoPersona = body;
  foundTipoPersona._id = body._id;
  const updatedTipoPersona = await foundTipoPersona.save();
  return updatedTipoPersona;
};

const DeleteTipoPersona = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddTipoPersona,
  list: GetTipoPersona,
  update: UpdateTipoPersona,
  remove: DeleteTipoPersona
};
