import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Campus = require('../models/campus');
const Datos = require('../models/datosPerson');
const Hospedaje= require('../models/hospedaje');
const Curso = require('../models/curso');


const inscripcionSchema = new Schema({
  campus: { type: Schema.Types.ObjectId, ref: 'Campus'},
  docIdentidad:  { type: Schema.Types.ObjectId, ref: 'Datos'},// este hace refencia persona
  constoInscrip: {type: Number},
  hospedaje: { type: Schema.Types.ObjectId, ref: 'Hospedaje'},
  curso:  { type: Schema.Types.ObjectId, ref: 'Curso'},
  fechaInicio: { type:String}
 
});

// Convertir a modelo
const Inscripcion = mongoose.model('Inscripcion', inscripcionSchema);

export default Inscripcion;