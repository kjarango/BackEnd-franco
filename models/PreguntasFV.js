import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const preFVSchema = new Schema({
    enunciado:  { type:String},
    si:  { type:String},
    no:  { type:String},
    respuesta:  { type:String}
});

// Convertir a modelo
const PreFV = mongoose.model('PreFV', preFVSchema);

export default PreFV;