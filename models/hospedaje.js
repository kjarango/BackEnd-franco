import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const hospedajeSchema = new Schema({
  nombreHospe: { type:String, require: true},
  ubicacion:  { type:String, require: true},
  descripcion: { type:String, require: true}
 
});

// Convertir a modelo
const Hospedaje = mongoose.model('Hospedaje', hospedajeSchema);

export default Hospedaje;