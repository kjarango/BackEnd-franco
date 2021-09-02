import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Pais = require('../models/Pais');
const Ingles = require('../models/ingles');
const Inscripcion = require('../models/inscripcion');
const uniqueValidator = require('mongoose-unique-validator');

// Roles
const roles = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} no es un rol válido'
}


const datosSchema = new Schema({
  nombre: { type:String, require: true},
  docIdentidad:  { type:String, require: true},
  telefono: {type: Number, require: true},
  direccion: { type:String, require: true},
  correo:  { type:String,require: [true, 'el correo es obligatorio'], unique: true },
  fechaNacimiento: { type:Date },
  pais:{ type: Schema.Types.ObjectId, ref: 'Pais' },
  ingles:{ type: Schema.Types.ObjectId, ref: 'Ingles'},
  inscripcion:{ type: Schema.Types.ObjectId, ref: 'Inscripcion'},
  role: { type: String, default: 'USER', enum: roles },
  pass:{ type:String, require: true},
  activo: { type: Boolean, default: true }
 
});

// Validator
datosSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Eliminar pass de respuesta JSON
datosSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.pass;
  return obj;
 }

// Convertir a modelo
const Datos = mongoose.model('Datos', datosSchema);

export default Datos;