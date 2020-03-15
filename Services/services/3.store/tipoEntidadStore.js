const Model = require("../Models/tipoEntidadModel");
const mongoose = require('mongoose');

const AddTipoEntidad = async tipoEntidad => {
  tipoEntidad._id = new mongoose.Types.ObjectId;
  const myTipoEntidad = new Model(tipoEntidad);
  return await myTipoEntidad.save();
};

const GetTipoEntidad = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const tipoEntidad = await Model.find(filter);
  return tipoEntidad;
};

const UpdateTipoEntidad = async body => {
  const foundTipoEntidad = Model.findById(body._id);
  foundTipoEntidad = body;
  foundTipoEntidad._id = body._id;
  const updatedTipoEntidad = await foundTipoEntidad.save();
  return updatedTipoEntidad;
};

const DeleteTipoEntidad = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddTipoEntidad,
  list: GetTipoEntidad,
  update: UpdateTipoEntidad,
  remove: DeleteTipoEntidad
};
