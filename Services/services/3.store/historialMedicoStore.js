const Model = require("../Models/historialMedicoModel");
const mongoose = require('mongoose');

const AddHistorialMedico = async historialMedico => {
  historialMedico._id = new mongoose.Types.ObjectId;
  const myHistorialMedico = new Model(historialMedico);
  return await myHistorialMedico.save();
};

const GetHistorialMedico = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const historialMedico = await Model.find(filter);
  return historialMedico;
};

const UpdateHistorialMedico = async body => {
  const foundHistorialMedico = await Model.findByIdAndUpdate(body._id,body);
  const updatedHistorialMedico = await Model.findById(body._id);
  return updatedHistorialMedico;
};

const DeleteHistorialMedico = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddHistorialMedico,
  list: GetHistorialMedico,
  update: UpdateHistorialMedico,
  remove: DeleteHistorialMedico
};
