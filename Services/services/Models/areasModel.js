const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    NombreArea: {type:String, required: true},
    Activo: {type: Boolean, default: true}
});

const model = mongoose.model('Area', mySchema);
module.exports = model;