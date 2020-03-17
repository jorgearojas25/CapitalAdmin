const Model = require("../Models/personaMenorModel");
const mongoose = require('mongoose');

const AddPersonaMenor = async personaMenor => {
  personaMenor._id = new mongoose.Types.ObjectId;
  const myPersonaMenor = new Model(personaMenor);
  return await myPersonaMenor.save();
};

const GetPersonaMenor = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const personaMenor = await Model.find(filter);
  return personaMenor;
};

const UpdatePersonaMenor = async body => {
  const foundPersonaMenor = await Model.findByIdAndUpdate(body._id,body);
  const updatedPersonaMenor = await Model.findById(body._id);
  return updatedPersonaMenor;
};

const DeletePersonaMenor = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddPersonaMenor,
  list: GetPersonaMenor,
  update: UpdatePersonaMenor,
  remove: DeletePersonaMenor
};
