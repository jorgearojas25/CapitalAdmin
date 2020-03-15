const Model = require("../Models/entidadModel");
const mongoose = require('mongoose');

const AddEntidad = async entidad => {
  entidad._id = new mongoose.Types.ObjectId;
  const myEntidad = new Model(entidad);
  return await myEntidad.save();
};

const GetEntidad = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const entidad = await Model.find(filter);
  return entidad;
};

const UpdateEntidad = async body => {
  const foundEntidad = await Model.findByIdAndUpdate(body._id,body);
  const updatedEntidad = await Model.findById(body._id);
  return updatedEntidad;
};

const DeleteEntidad = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddEntidad,
  list: GetEntidad,
  update: UpdateEntidad,
  remove: DeleteEntidad
};
