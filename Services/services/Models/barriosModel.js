const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    NombreBarrio: {type:String, required: true},
    IdArea: {type: Schema.ObjectId, ref: 'Area'},
    IdTipoBarrio: {type: Schema.ObjectId, ref: 'TipoBarrio'},
    NivelSocioEconomico: Number,
    TieneRutas: Boolean,
    Rutas: [{
        type: Schema.ObjectId,
        ref: 'Rutas'
    }]
});

const model = mongoose.model('Barrios', mySchema);
module.exports = model;