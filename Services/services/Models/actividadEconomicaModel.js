const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  NombreTipoActividadEconomica: { type: String, required: true },
  Activo: { type: Boolean, default: true }
});

const model = mongoose.model("ActividadEconomica", mySchema);
module.exports = model;
