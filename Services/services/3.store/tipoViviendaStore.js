const Model = require("../Models/tipoViviendaModel");

const AddTipoVivienda = async tipoVivienda => {
  tipoVivienda._id = null;
  const myTipoVivienda = new Model(tipoVivienda);
  return await myTipoVivienda.save();
};

const GetTipoVivienda = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const tipoVivienda = await Model.find(filter);
  return tipoVivienda;
};

const UpdateTipoVivienda = async body => {
  const foundTipoVivienda = Model.findById(body._id);
  foundTipoVivienda = body;
  foundTipoVivienda._id = body._id;
  const updatedTipoVivienda = await foundTipoVivienda.save();
  return updatedTipoVivienda;
};

const DeleteTipoVivienda = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddTipoVivienda,
  list: GetTipoVivienda,
  update: UpdateTipoVivienda,
  remove: DeleteTipoVivienda
};