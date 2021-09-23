import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const preAbiSchema = new Schema({
    enunciado:  { type:String},
    respuesta:  { type:String}
});

// Convertir a modelo
const PreAbi = mongoose.model('PreAbi', preAbiSchema);

export default PreAbi;