const Model = require("../Models/tipoBarrioModel");

const AddTipoBarrio = async tipoBarrio => {
  const myTipoBarrio = new Model(tipoBarrio);
  return await myTipoBarrio.save();
};

const GetTipoBarrio = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const tipoBarrio = await Model.find(filter);
  return tipoBarrio;
};

const UpdateTipoBarrio = async body => {
  const foundTipoBarrio = Model.findById(body._id);
  foundTipoBarrio = body;
  foundTipoBarrio._id = body._id;
  const updatedTipoBarrio = await foundTipoBarrio.save();
  return updatedTipoBarrio;
};

const DeleteTipoBarrio = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddTipoBarrio,
  list: GetTipoBarrio,
  update: UpdateTipoBarrio,
  remove: DeleteTipoBarrio
};
