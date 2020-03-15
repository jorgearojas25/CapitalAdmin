const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    IdActividadEconomica: {type: Schema.ObjectId, ref: 'ActividadEconomica'},
    IdTipoEntidad: {type: Schema.ObjectId, ref: 'TipoEntidad'},
    IdBarrio: {type: Schema.ObjectId, ref: 'Barrios'},
    NombreEntidad: {type: String, required:true},
});

const model = mongoose.model("Entidad", mySchema);
module.exports = model;
