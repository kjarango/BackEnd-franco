import express from 'express';
const router = express.Router();
// Filtrar campos de PUT
const _ = require('underscore');

// importar el modelo datos personales
import Datos from '../models/datosPerson';

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10
const {verificarAuth} = require('../middlewares/autenticacion.js');
// Agregar una datos personales

router.post('/nuevaPersona', async(req, res) => {
   
  const nuevoDato = {
    nombre: req.body.nombre,
    docIdentidad:  req.body.docIdentidad,
    telefono:  req.body.telefono,
    direccion: req.body.direccion, 
    correo:  req.body.correo,
    fechaNacimiento:  req.body.fechaNacimiento,
    pais: req.body.pais,
    ciudad: req.body.ciudad,
    ingles: req.body.ingles,
    inscripcion: req.body.inscripcion,
    role:  req.body.role
    
    }

    nuevoDato.pass = bcrypt.hashSync(req.body.pass, saltRounds);

  try {

    const datosDB = await Datos.create(nuevoDato);
    res.status(200).json(datosDB);

 
  } catch (error) {
    return res.send(`Error: ${error}`)
  }
  
});


// Get con parámetros
router.get('/datos/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const datosDB = await Datos.findOne({_id});
      res.json(datosDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  
  // Get con todos los documentos
  router.get('/datos', async(req, res) => {
    try {
      const datosDb = await Datos.find();
      res.json(datosDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una datos 


router.put('/datos/:id', async(req, res) => {
    const _id = req.params.id;
    const body = _.pick(req.body,['nombre','correo','pass','telefono', 'direccion','docIdentidad','ingles','fechaNacimiento']);
    if(body.pass){
      nuevoDato.pass = bcrypt.hashSync(req.body.pass, saltRounds);
    }
    
    try {
      const datosDb = await Datos .findByIdAndUpdate(
        _id,
        body,
        {new: true, runValidators: true});
      res.json(datosDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
        
      })
    }
  });

  // Delete eliminar una datos 
router.delete('/datos/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const datosDb = await Datos.findByIdAndDelete({_id});
      if(!datosDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(datosDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

// Exportamos la configuración de express app
module.exports = router;