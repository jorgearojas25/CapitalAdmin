const Model = require("../Models/familiaModel");
const mongoose = require("mongoose");

const AddFamilia = async familia => {
  familia._id = new mongoose.Types.ObjectId();
  const myFamilia = new Model(familia);
  return await myFamilia.save();
};

const GetFamilia = async myFilter => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (myFilter !== null) {
      filter = myFilter;
    }
    const familia = Model.find(filter)
      .populate("IdTipoVivienda")
      .populate("IdBarrio")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
    return familia;
  });
};

const UpdateFamilia = async body => {
  const foundFamilia = await Model.findByIdAndUpdate(body._id, body);
  const updatedFamilia = await Model.findById(body._id);
  return updatedFamilia;
};

const DeleteFamilia = _id => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddFamilia,
  list: GetFamilia,
  update: UpdateFamilia,
  remove: DeleteFamilia
};
