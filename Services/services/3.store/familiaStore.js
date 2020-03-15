const Model = require("../Models/familiaModel");
const mongoose = require('mongoose');

const AddFamilia = async familia => {
  familia._id = new mongoose.Types.ObjectId;
  const myFamilia = new Model(familia);
  return await myFamilia.save();
};

const GetFamilia = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const familia = await Model.find(filter);
  return familia;
};

const UpdateFamilia = async body => {
  const foundFamilia = Model.findById(body._id);
  foundFamilia = body;
  foundFamilia._id = body._id;
  const updatedFamilia = await foundFamilia.save();
  return updatedFamilia;
};

const DeleteFamilia = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddFamilia,
  list: GetFamilia,
  update: UpdateFamilia,
  remove: DeleteFamilia
};
