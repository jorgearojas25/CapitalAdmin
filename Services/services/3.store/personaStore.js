const Model = require("../Models/personaModel");
const mongoose = require('mongoose');

const AddPersona = async persona => {
  persona._id = new mongoose.Types.ObjectId;
  const myPersona = new Model(persona);
  return await myPersona.save();
};

const GetPersona = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const persona = await Model.find(filter);
  return persona;
};

const UpdatePersona = async body => {
  const foundPersona = Model.findById(body._id);
  foundPersona = body;
  foundPersona._id = body._id;
  const updatedPersona = await foundPersona.save();
  return updatedPersona;
};

const DeletePersona = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddPersona,
  list: GetPersona,
  update: UpdatePersona,
  remove: DeletePersona
};
