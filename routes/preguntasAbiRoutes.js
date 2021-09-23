import express from 'express';
const router = express.Router();

import PreAbi from '../models/preguntasAbi'; 

// Agregar una nota
router.post('/nuevopreAbi', async(req, res) => {
  const body = req.body;  
  try {
    const preAbiDB = await PreAbi.create(body);
    res.status(200).json(preAbiDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/preAbi/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const preAbiDB = await PreAbi.findOne({_id});
      res.json(preAbiDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/preAbi', async(req, res) => {
    try {
      const preAbiDb = await PreAbi.find();
      res.json(preAbiDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Delete eliminar una preAbi
router.delete('/preAbi/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const preAbiDb = await PreAbi.findByIdAndDelete({_id});
      if(!preAbiDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(preAbiDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una preAbi
router.put('/preAbi/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const preAbiDb = await preAbi.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(preAbiDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  module.exports = router;