import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const paisSchema = new Schema({
  pais:  { type:String, require: true}
 
});

// Convertir a modelo
const Pais = mongoose.model('Pais', paisSchema);

export default Pais;