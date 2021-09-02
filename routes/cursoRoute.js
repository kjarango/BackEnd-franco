import express from 'express';
const router = express.Router();

import Curso from '../models/curso'; 

// Agregar una nota
router.post('/nuevoCurso', async(req, res) => {
  const body = req.body;  
  try {
    const cursoDB = await Curso.create(body);
    res.status(200).json(cursoDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/curso/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const cursoDB = await Curso.findOne({_id});
      res.json(cursoDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/curso', async(req, res) => {
    try {
      const cursoDb = await Curso.find();
      res.json(cursoDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Delete eliminar una curso
router.delete('/curso/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const cursoDb = await Curso.findByIdAndDelete({_id});
      if(!cursoDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(cursoDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una curso
router.put('/curso/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const cursoDb = await Curso.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(cursoDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  module.exports = router;