import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cursoSchema = new Schema({
  tiempo: { type:Number, require: true},
  nombreCurso:  { type:String, require: true},
  valor: {type: Number, require: true},
  Descripcion: { type:String, require: true}
});

// Convertir a modelo
const Curso = mongoose.model('Curso', cursoSchema);

export default Curso;