import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const inscripcionSchema = new Schema({
  campus: { type:String, require: true},
  docIdentidad:  { type:String, require: true},
  constoInscrip: {type: Number, require: true},
  hospedaje: { type:String, require: true},
  curso:  { type:String, require: true},
  fechaInicio: { type:Date, require: true}
 
});

// Convertir a modelo
const Inscripcion = mongoose.model('Inscripcion', inscripcionSchema);

export default Inscripcion;