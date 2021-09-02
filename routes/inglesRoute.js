import express from 'express';
const router = express.Router();
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion')
import Ingles from '../models/ingles';

// Agregar una nota
router.post('/nuevoIngles',verificarAuth, async(req, res) => {
  const body = req.body; 
  body.usuarioId = req.usuario._id; 
  try {
    const inglesDB = await Ingles.create(body);
    res.status(200).json(inglesDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
})

// Get con parámetros
router.get('/ingles/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const inglesDB = await Ingles.findOne({_id});
      res.json(inglesDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/ingles', async(req, res) => {
    try {
      const inglesDb = await Ingles.find();
      res.json(inglesDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Delete eliminar una ingles
router.delete('/ingles/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const inglesDb = await Ingles.findByIdAndDelete({_id});
      if(!inglesDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(inglesDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una ingles
router.put('/ingles/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const inglesDb = await Ingles.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(inglesDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  module.exports = router;