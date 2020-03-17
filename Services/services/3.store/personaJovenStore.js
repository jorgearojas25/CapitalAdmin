const Model = require("../Models/personaJovenModel");
const mongoose = require('mongoose');

const AddPersonaJoven = async personaJoven => {
  personaJoven._id = new mongoose.Types.ObjectId;
  const myPersonaJoven = new Model(personaJoven);
  return await myPersonaJoven.save();
};

const GetPersonaJoven = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const personaJoven = await Model.find(filter);
  return personaJoven;
};

const UpdatePersonaJoven = async body => {
  const foundPersonaJoven = await Model.findByIdAndUpdate(body._id,body);
  const updatedPersonaJoven = await Model.findById(body._id);
  return updatedPersonaJoven;
};

const DeletePersonaJoven = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddPersonaJoven,
  list: GetPersonaJoven,
  update: UpdatePersonaJoven,
  remove: DeletePersonaJoven
};
