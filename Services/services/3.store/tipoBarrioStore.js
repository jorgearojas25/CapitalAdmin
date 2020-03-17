const Model = require("../Models/tipoBarrioModel");
const mongoose = require('mongoose');

const AddTipoBarrio = async tipoBarrio => {
  tipoBarrio._id = new mongoose.Types.ObjectId;
  const myTipoBarrio = new Model(tipoBarrio);
  return await myTipoBarrio.save();
};

const GetTipoBarrio = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const tipoBarrio = await Model.find(filter);
  return tipoBarrio;
};

const UpdateTipoBarrio = async body => {
  const foundTipoBarrio = await Model.findByIdAndUpdate(body._id,body);
  const updatedTipoBarrio = await Model.findById(body._id);
  return updatedTipoBarrio;
};

const DeleteTipoBarrio = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddTipoBarrio,
  list: GetTipoBarrio,
  update: UpdateTipoBarrio,
  remove: DeleteTipoBarrio
};
