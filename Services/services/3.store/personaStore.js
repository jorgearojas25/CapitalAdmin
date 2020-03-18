const Model = require("../Models/personaModel");
const mongoose = require("mongoose");

const AddPersona = async persona => {
  persona._id = new mongoose.Types.ObjectId();
  const myPersona = new Model(persona);
  return await myPersona.save();
};

const GetPersona = async myFilter => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (myFilter !== null) {
      filter = myFilter;
    }
    const persona = Model.find(filter)
      .populate("IdTipoPersona")
      .populate("IdFamilia")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
    return persona;
  });
};

const UpdatePersona = async body => {
  const foundPersona = await Model.findByIdAndUpdate(body._id, body);
  const updatedPersona = await Model.findById(body._id);
  return updatedPersona;
};

const DeletePersona = _id => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddPersona,
  list: GetPersona,
  update: UpdatePersona,
  remove: DeletePersona
};
