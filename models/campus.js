import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const campusSchema = new Schema({
  nombreCampus: { type:String, require: true},
  pais:  { type:String, require: true},
  descripcion: { type:String, require: true}
 
});

// Convertir a modelo
const Campus = mongoose.model('Campus', campusSchema);

export default Campus;