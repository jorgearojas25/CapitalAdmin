const Model = require("../Models/personaAdultaModel");
const mongoose = require("mongoose");

const AddPersonaAdulta = async personaAdulta => {
  personaAdulta._id = new mongoose.Types.ObjectId();
  const myPersonaAdulta = new Model(personaAdulta);
  return await myPersonaAdulta.save();
};

const GetPersonaAdulta = async myFilter => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (myFilter !== null) {
      filter = myFilter;
    }
    const personaAdulta = Model.find(filter)
      .populate("IdEntidad")
      .populate("IdTipoEducacion")
      .populate("IdPersona")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
    return personaAdulta;
  });
};

const UpdatePersonaAdulta = async body => {
  const foundPersonaAdulta = await Model.findByIdAndUpdate(body._id, body);
  const updatedPersonaAdulta = await Model.findById(body._id);
  return updatedPersonaAdulta;
};

const DeletePersonaAdulta = _id => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddPersonaAdulta,
  list: GetPersonaAdulta,
  update: UpdatePersonaAdulta,
  remove: DeletePersonaAdulta
};
