const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    IdEntidad: {type: Schema.ObjectId, ref: 'Entidad'},
    IdTipoEducacion: {type: Schema.ObjectId, ref: 'TipoEducacion'},
    IdPersona: {type: Schema.ObjectId, ref: 'Persona'},
    HistorialMedico: [{type: Schema.ObjectId, ref: 'HistorialMedico'}],
});

const model = mongoose.model("PersonaMenor", mySchema);
module.exports = model;
