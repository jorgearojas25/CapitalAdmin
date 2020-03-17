const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  NombreTipoEntidad: { type: String, required: true },
  Activo: { type: Boolean, default: true }
});

const model = mongoose.model("TipoEntidad", mySchema);
module.exports = model;
