const Model = require("../Models/actividadEconomicaModel");
const mongoose = require('mongoose');

const AddActividadEconomica = async actividadEconomica => {
  actividadEconomica._id = new mongoose.Types.ObjectId;
  const myActividadEconomica = new Model(actividadEconomica);
  return await myActividadEconomica.save();
};

const GetActividadEconomica = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const actividadEconomica = await Model.find(filter);
  return actividadEconomica;
};

const UpdateActividadEconomica = async body => {
  const foundActividadEconomica = await Model.findByIdAndUpdate(body._id,body);
  const updatedActividadEconomica = await Model.findById(body._id);
  return updatedActividadEconomica;
};

const DeleteActividadEconomica = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddActividadEconomica,
  list: GetActividadEconomica,
  update: UpdateActividadEconomica,
  remove: DeleteActividadEconomica
};
