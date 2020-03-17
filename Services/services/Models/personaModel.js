const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    IdFamilia: {type: Schema.ObjectId, ref: 'Familia'},
    FechaDeNacimiento: Date,
    LugarDeNacimiento: String,
    PrimerNombre:{type: String, required: true},
    SegundoNombre: String,
    PrimerApellido: {type: String, required: true},
    SegundoApellido: String
});

const model = mongoose.model("Persona", mySchema);
module.exports = model;
