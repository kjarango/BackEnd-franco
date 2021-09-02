import express from 'express';
const router = express.Router();

import Pregunta from '../models/Preguntas';

// Agregar una nota
router.post('/nuevapregunta', async(req, res) => {
  const body = req.body; 
  body.usuarioId = req.usuario._id; 
  try {
    const preguntaDB = await Pregunta.create(body);
    res.status(200).json(preguntaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/pregunta/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const preguntaDB = await Pregunta.findOne({_id});
      res.json(preguntaDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/pregunta', async(req, res) => {
    
    try {
      const preguntaDb = await Pregunta.find();
      res.json(preguntaDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Delete eliminar una pregunta
router.delete('/pregunta/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const preguntaDb = await Pregunta.findByIdAndDelete({_id});
      if(!preguntaDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(preguntaDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una pregunta
router.put('/pregunta/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const preguntaDb = await Pregunta.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(preguntaDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  module.exports = router;