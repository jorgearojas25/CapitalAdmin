const Model = require("../Models/tipoEducacionModel");
const mongoose = require('mongoose');

const AddTipoEducacion = async tipoEducacion => {
  tipoEducacion._id = new mongoose.Types.ObjectId;
  const myTipoEducacion = new Model(tipoEducacion);
  return await myTipoEducacion.save();
};

const GetTipoEducacion = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const tipoEducacion = await Model.find(filter);
  return tipoEducacion;
};

const UpdateTipoEducacion = async body => {
  const foundTipoEducacion = Model.findById(body._id);
  foundTipoEducacion = body;
  foundTipoEducacion._id = body._id;
  const updatedTipoEducacion = await foundTipoEducacion.save();
  return updatedTipoEducacion;
};

const DeleteTipoEducacion = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddTipoEducacion,
  list: GetTipoEducacion,
  update: UpdateTipoEducacion,
  remove: DeleteTipoEducacion
};
