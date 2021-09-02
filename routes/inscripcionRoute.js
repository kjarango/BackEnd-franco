import express from 'express';
const router = express.Router();
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion')
import Inscripcion from '../models/inscripcion'

// Agregar una nota
router.post('/nuevaInscrip',verificarAuth, async(req, res) => {
  const body = req.body;  
  body.usuarioId = req.usuario._id;
  try {
    const inscripcionDB = await Inscripcion.create(body);
    res.status(200).json(inscripcionDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
})

// Get con parámetros
router.get('/inscripcion/:id', async(req, res) => {
    const _id = req.params.id;
    
    try {
      const inscripcionDB = await Inscripcion.findOne({_id});
      res.json(inscripcionDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/inscripcion',verificarAuth, async(req, res) => {
    const usuarioId = req.usuario._id
    try {
      const inscripcionDb = await Inscripcion.find();
      res.json(inscripcionDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  router.delete('/inscripcion/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const inscripcionDb = await Inscripcion.findByIdAndDelete({_id});
      if(!inscripcionDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(inscripcionDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una inscripcion
router.put('/inscripcion/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const inscripcionDb = await Inscripcion.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(inscripcionDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  module.exports = router;