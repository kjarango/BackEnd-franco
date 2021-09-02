import express from 'express';
const router = express.Router();

import Respuesta from '../models/respuesta';

// Agregar una nota
router.post('/nuevarespuesta', async(req, res) => {
  const body = req.body;  
  try {
    const respuestaDB = await Respuesta.create(body);
    res.status(200).json(respuestaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/respuesta/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const respuestaDB = await Respuesta.findOne({_id});
      res.json(respuestaDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/respuesta', async(req, res) => {
    try {
      const respuestaDb = await Respuesta.find();
      res.json(respuestaDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Delete eliminar una respuesta
router.delete('/respuesta/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const respuestaDb = await Respuesta.findByIdAndDelete({_id});
      if(!respuestaDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(respuestaDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una respuesta
router.put('/respuesta/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const respuestaDb = await Respuesta.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(respuestaDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  module.exports = router;