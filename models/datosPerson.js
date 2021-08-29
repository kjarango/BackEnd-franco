import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const datosSchema = new Schema({
  nombre: { type:String, require: true},
  docIdentidad:  { type:String, require: true},
  telefono: {type: Number, require: true},
  direccion: { type:String, require: true},
  correo:  { type:String, require: true},
  fechaNacimiento: { type:Date, require: true}
 
});

// Convertir a modelo
const Datos = mongoose.model('Datos', datosSchema);

export default Datos;