import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();
//rutas
app.use('/api', require('./routes/datosPersonRoute'));
// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
//app.get('/', (req, res) => {
 // res.send('Hello World!');
//});

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