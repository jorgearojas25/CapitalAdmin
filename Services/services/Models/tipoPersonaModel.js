const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    NombreTipoPersona: {type: String, required:true},
    Activo: { type: Boolean, default: true }
});

const model = mongoose.model("TipoPersona", mySchema);
module.exports = model;
