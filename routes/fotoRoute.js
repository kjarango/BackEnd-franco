const path = require ('path');
const multer = require('multer');
import express from 'express';
const router = express.Router();

let storage = multer.diskStorage({
    destination:(req, file,cb)=>{
        cb(null, './subidafoto')
    },
    filename: (req, file, cb)=>{
        cb(null, file.filename +'-' +Date.now() +path.extname(file.originalname))
    }
});

const upload = multer({storage});

router.post('/subirFoto', upload.single('file'), (req, res)=>{
   console.log('Storage location is ${req.hostname}/${req.file.path}');
   return res.send(req.file);
});

module.exports = router;