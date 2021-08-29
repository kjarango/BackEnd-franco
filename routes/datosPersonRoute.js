import express from 'express';
const router = express.Router();


// importar el modelo datos personales
import Datos from '../models/datosPerson';


// Agregar una datos personales

router.post('/nuevaPersona', async(req, res) => {
  console.log("ok")
  console.log(req.body) 
  res.json("ok")
   
  const nuevoDato ={
    nombre: req.body.nombre,
    docIdentidad: req.body.docIdentidad,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    correo: req.body.correo,
    fechaNacimiento: req.body.fechaNacimiento
  }  
  console.log(req.body)
 
  try {

    const datosDB = await Datos.save(nuevoDato);
    res.status(200).json(datosDB);
    console.log(nuevoDato) 
    res.json("ok")
 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
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
    const body = req.body;
    try {
      const datosDb = await Datos .findByIdAndUpdate(
        _id,
        body,
        {new: true});
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