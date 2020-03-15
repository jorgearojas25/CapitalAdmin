const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  NombreTipoEducacion: { type: String, required: true },
  Activo: { type: Boolean, default: true }
});

const model = mongoose.model("TipoEducacion", mySchema);
module.exports = model;
