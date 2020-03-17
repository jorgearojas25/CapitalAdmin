const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    IdEntidad: {type: Schema.ObjectId, ref: 'Entidad'},
    IdTipoEducacion: {type: Schema.ObjectId, ref: 'TipoEducacion'},
    IdPersona: {type: Schema.ObjectId, ref: 'Persona'},
    Jornada:String,
    Cargo: String,
    Salario: Number
});

const model = mongoose.model("PersonaAdulta", mySchema);
module.exports = model;
