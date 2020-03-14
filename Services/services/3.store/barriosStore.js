const Model = require("../Models/barriosModel");

const AddBarrios = async barrios => {
  barrios._id = null;
  const myBarrios = new Model(barrios);
  return await myBarrios.save();
};

const GetBarrios = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const barrios = await Model.find(filter);
  return barrios;
};

const UpdateBarrios = async body => {
  const foundBarrios = Model.findById(body._id);
  foundBarrios = body;
  foundBarrios._id = body._id;
  const updatedBarrios = await foundBarrios.save();
  return updatedBarrios;
};

const DeleteBarrios = _id => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddBarrios,
  list: GetBarrios,
  update: UpdateBarrios,
  remove: DeleteBarrios
};
