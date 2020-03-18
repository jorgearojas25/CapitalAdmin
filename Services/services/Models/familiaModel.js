const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    NombreFamilia: {type:String, required: true},
    Calle: String,
    Numero: String,
    Telefono: Number,
    IdTipoVivienda: {type: Schema.ObjectId, ref: 'TipoVivienda'},
    IdBarrio: {type: Schema.ObjectId, ref: 'Barrios'},
    IngresoFamiliar: Number
});

const model = mongoose.model("Familia", mySchema);
module.exports = model;
