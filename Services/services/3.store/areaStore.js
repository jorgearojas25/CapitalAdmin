const Model = require("../Models/areasModel");
const mongoose = require('mongoose');

const AddArea = async area => {
  area._id = new mongoose.Types.ObjectId;
  const myArea = new Model(area);
  return await myArea.save();
};

const GetArea = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const area = await Model.find(filter);
  return area;
};

const UpdateArea = async body => {
  const foundArea = Model.findById(body._id);
  foundArea = body;
  foundArea._id = body._id;
  const updatedArea = await foundArea.save();
  return updatedArea;
};

const DeleteArea = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddArea,
  list: GetArea,
  update: UpdateArea,
  remove: DeleteArea
};
