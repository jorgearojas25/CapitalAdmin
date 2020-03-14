const Model = require("../Models/rutaModel");

const AddRuta = async ruta => {
  ruta._id = null;
  const myRuta = new Model(ruta);
  return await myRuta.save();
};

const GetRuta = async myFilter => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const ruta = await Model.find(filter);
  return ruta;
};

const UpdateRuta = async body => {
  const foundRuta = Model.findById(body._id);
  foundRuta = body;
  foundRuta._id = body._id;
  const updatedRuta = await foundRuta.save();
  return updatedRuta;
};

const DeleteRuta = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddRuta,
  list: GetRuta,
  update: UpdateRuta,
  remove: DeleteRuta
};
