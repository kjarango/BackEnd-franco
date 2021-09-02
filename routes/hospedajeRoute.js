import express from 'express';
const router = express.Router();

import Hospedaje from '../models/hospedaje';

// Agregar una nota
router.post('/nuevoHospe', async(req, res) => {
  const body = req.body;  
  try {
    const hospedajeDB = await Hospedaje.create(body);
    res.status(200).json(hospedajeDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/hospedaje/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const hospedajeDB = await Hospedaje.findOne({_id});
      res.json(hospedajeDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/hospedaje', async(req, res) => {
    try {
      const hospedajeDb = await Hospedaje.find();
      res.json(hospedajeDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Delete eliminar una hospedaje
router.delete('/hospedaje/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const hospedajeDb = await Hospedaje.findByIdAndDelete({_id});
      if(!hospedajeDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(hospedajeDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una hospedaje
router.put('/hospedaje/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const hospedajeDb = await Hospedaje.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(hospedajeDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  module.exports = router;