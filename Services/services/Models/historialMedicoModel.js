const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  NombreHistorialMedico: { type: String, required: true },
  Activo: { type: Boolean, default: true }
});

const model = mongoose.model("HistorialMedico", mySchema);
module.exports = model;
