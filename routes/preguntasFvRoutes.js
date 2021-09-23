import express from 'express';
const router = express.Router();

import PreFV from '../models/PreguntasFV'; 

// Agregar una nota
router.post('/nuevoFV', async(req, res) => {
  const body = req.body;  
  try {
    const fvDB = await PreFV.create(body);
    res.status(200).json(fvDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/preFV/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const fvDB = await PreFV.findOne({_id});
      res.json(fvDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/preFV', async(req, res) => {
    try {
      const fvDB = await PreFV.find();
      res.json(fvDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Delete eliminar una PreFV
router.delete('/preFV/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const fvDB = await PreFV.findByIdAndDelete({_id});
      if(!fvDB){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(fvDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una PreFV
router.put('/preFV/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const fvDB = await PreFV.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(fvDB);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  module.exports = router;