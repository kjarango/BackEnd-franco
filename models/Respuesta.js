import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Pregunta = require('../models/Preguntas');

const respuestaSchema = new Schema({
  Pregunta: { type: Schema.Types.ObjectId, ref: 'Pregunta', require: true},
  respuesta:  { type:String, require: true}
});

// Convertir a modelo
const Respuesta = mongoose.model('Respuesta', respuestaSchema);

export default Respuesta;