// Get con parámetros
router.get('/inscripcion/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const inscripcionDB = await Inscripcion.findOne({_id});
      res.json(inscripcionDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/inscripcion', async(req, res) => {
    try {
      const inscripcionDb = await Inscripcion.find();
      res.json(inscripcionDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  router.delete('/inscripcion/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const inscripcionDb = await Inscripcion.findByIdAndDelete({_id});
      if(!inscripcionDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(inscripcionDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una inscripcion
router.put('/inscripcion/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const inscripcionDb = await Inscripcion.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(inscripcionDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });