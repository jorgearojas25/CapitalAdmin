const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    NombreTipoVivienda: {type:String, required: true},
    Activo: {type: Boolean, default: true}
});

const model = mongoose.model('Rutas', mySchema);
module.exports(model);