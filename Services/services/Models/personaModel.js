const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    IdFamilia: {type: Schema.ObjectId, ref: 'Familia'},
    IdTipoPersona: {type: Schema.ObjectId, ref: 'TipoPersona'},
    FechaDeNacimiento: {type: Date, required: true},
    LugarDeNacimiento: String,
    PrimerNombre:{type: String, required: true},
    SegundoNombre: String,
    PrimerApellido: {type: String, required: true},
    SegundoApellido: String,
    NumeroIdentificacion: String
});

const model = mongoose.model("Persona", mySchema);
module.exports = model;
