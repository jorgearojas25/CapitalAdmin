const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    NombreTipoBarrio: {type:String, required: true},
    Activo: {type: Boolean, default: true}
});

const model = mongoose.model('TipoBarrio', mySchema);
module.exports = model;