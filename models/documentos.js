import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const docSchema = new Schema({
  documento: { type:String, require: true},
  date: { type: Date, default: Date.now }
 
});

// Convertir a modelo
const Doc = mongoose.model('Doc', docSchema);

export default Doc;