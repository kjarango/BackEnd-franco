import express from 'express';
const router = express.Router();
const bcrypt = require('bcrypt');
// JWT
const jwt = require('jsonwebtoken');
const saltRounds = 10;

import Datos from '../models/datosPerson';

router.get('/', async(req, res) => {
    res.json({mensaje: 'Funciona!'})
})

router.post('/', async(req, res) => {

    let body = req.body;
  
    try {
      // Buscamos email en DB
      const datosDB = await Datos.findOne({correo: body.correo});
  
      // Evaluamos si existe el usuario en DB
      if(!datosDB){
        return res.status(400).json({
          mensaje: 'Usuario! inválido',
        });
      }
  
      // Evaluamos la contraseña correcta
      if( !bcrypt.compareSync(body.pass, datosDB.pass) ){
        return res.status(400).json({
          mensaje: 'contraseña! inválidos',
        });
      }
  
      // Generar Token
        let token = jwt.sign({
            data: datosDB
        }, 'secret', { expiresIn: 60 * 60 * 24 * 30}) // Expira en 30 días
        
        // Pasó las validaciones
        return res.json({
            datosDB,
            token: token
        })
      
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      });
    }
});

module.exports = router;