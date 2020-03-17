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
  const foundArea = await Model.findByIdAndUpdate(body._id,body);
  const updatedArea = await Model.findById(body._id);
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
