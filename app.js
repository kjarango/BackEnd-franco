import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
const fileUpload = require('express-fileupload');
// JWT
const jwt = require('jsonwebtoken');

const app = express();
// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

//rutas
app.use('/api', require('./routes/datosPersonRoute'));
app.use('/api', require('./routes/campusRoute'));
app.use('/api', require('./routes/cursoRoute'));
app.use('/api', require('./routes/hospedajeRoute'));
app.use('/api', require('./routes/inglesRoute'));
app.use('/api', require('./routes/inscripcionRoute'));
app.use('/api', require('./routes/preguntaRoute'));
app.use('/api', require('./routes/respuestaRoute'));
app.use('/api', require('./routes/documentosRoute'));
app.use('/api', require('./routes/preguntasFvRoutes'));
app.use('/api', require('./routes/preguntasAbiRoutes'));

app.use('/api/login', require('./routes/login'));


// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
});



//configuracion de moongose
const mongoose = require('mongoose');
 
const uri = "mongodb+srv://electiva:karen424@cluster1.ki8e0.mongodb.net/MongoDB-Cluster?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
  
  () => { console.log('Conectado a Cloud.mongoDB') },
  
  err => { console.log(err) }
);




// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});