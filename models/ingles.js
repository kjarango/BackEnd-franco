import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const inglesSchema = new Schema({
  nivel: { type:String, require: true},
  Descripcion:  { type:String, require: true} 
});

// Convertir a modelo
const Ingles = mongoose.model('Ingles', inglesSchema);

export default Ingles;