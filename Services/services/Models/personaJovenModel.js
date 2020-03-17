const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    IdEntidad: {type: Schema.ObjectId, ref: 'Entidad'},
    IdTipoEducacion: {type: Schema.ObjectId, ref: 'TipoEducacion'},
    IdPersona: {type: Schema.ObjectId, ref: 'Persona'},
    Jornada:String,
    Curso: String,
});

const model = mongoose.model("PersonaJoven", mySchema);
module.exports = model;
