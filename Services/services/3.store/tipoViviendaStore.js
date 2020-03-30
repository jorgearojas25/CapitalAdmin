const Model = require("../Models/tipoViviendaModel");
const mongoose = require('mongoose');

const AddTipoVivienda = async tipoVivienda => {
  tipoVivienda._id = new mongoose.Types.ObjectId;
  const myTipoVivienda = new Model(tipoVivienda);
  return await myTipoVivienda.save();
};

const GetTipoVivienda = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const tipoVivienda = await Model.find(filter);
  return tipoVivienda;
};

const UpdateTipoVivienda = async body => {
  const foundTipoVivienda = await Model.findByIdAndUpdate(body._id,body);
  const updatedTipoVivienda = await Model.findById(body._id);
  return updatedTipoVivienda;
};

const DeleteTipoVivienda = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddTipoVivienda,
  list: GetTipoVivienda,
  update: UpdateTipoVivienda,
  remove: DeleteTipoVivienda
};
