import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const preguntaSchema = new Schema({
  docIdentidad:  { type: Schema.Types.ObjectId, ref: 'Datos', require: true},
  enunciado:  { type:String, require: true},
  tipoPregunta: { type:String, require: true},
  opcA: { type:String, require: true},
  opcB: { type:String, require: true},
  opcC: { type:String, require: true},
  opcD: { type:String, require: true},
  opcE: { type:String, require: true}
});

// Convertir a modelo
const Pregunta = mongoose.model('Pregunta', preguntaSchema);

export default Pregunta;