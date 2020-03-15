const Model = require("../Models/barriosModel");
const mongoose = require('mongoose');

const AddBarrios = async barrios => {
  barrios._id = new mongoose.Types.ObjectId;
  const myBarrios = new Model(barrios);
  return await myBarrios.save();
};

const GetBarrios = async myFilter => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (myFilter !== null) {
      filter = myFilter;
    }
    const barrios = Model.find(filter)
      .populate("IdArea")
      .populate("IdTipoBarrio")
      .populate("Rutas")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
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
