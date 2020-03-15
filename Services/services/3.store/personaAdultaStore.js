const Model = require("../Models/personaAdultaModel");
const mongoose = require('mongoose');

const AddPersonaAdulta = async personaAdulta => {
  personaAdulta._id = new mongoose.Types.ObjectId;
  const myPersonaAdulta = new Model(personaAdulta);
  return await myPersonaAdulta.save();
};

const GetPersonaAdulta = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const personaAdulta = await Model.find(filter);
  return personaAdulta;
};

const UpdatePersonaAdulta = async body => {
  const foundPersonaAdulta = Model.findById(body._id);
  foundPersonaAdulta = body;
  foundPersonaAdulta._id = body._id;
  const updatedPersonaAdulta = await foundPersonaAdulta.save();
  return updatedPersonaAdulta;
};

const DeletePersonaAdulta = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddPersonaAdulta,
  list: GetPersonaAdulta,
  update: UpdatePersonaAdulta,
  remove: DeletePersonaAdulta
};
