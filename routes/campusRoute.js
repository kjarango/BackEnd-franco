import express from 'express';
const router = express.Router();

import Campus from '../models/campus';

// Agregar una nota
router.post('/nuevoCampus', async(req, res) => {
  const body = req.body;  
  try {
    const campusDB = await Campus.create(body);
    res.status(200).json(campusDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/campus/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const campusDB = await Campus.findOne({_id});
      res.json(campusDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/campus', async(req, res) => {
    try {
      const campusDb = await Campus.find();
      res.json(campusDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Delete eliminar una campus
router.delete('/campus/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const campusDb = await Campus.findByIdAndDelete({_id});
      if(!campusDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(campusDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una campus
router.put('/campus/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const campusDb = await Campus.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(campusDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  module.exports = router;