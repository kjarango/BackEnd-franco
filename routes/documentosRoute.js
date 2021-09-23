 const path = require ('path');
 const multer = require('multer');
 import express from 'express';
const router = express.Router();

 let storage = multer.diskStorage({
     destination:(req, file,cb)=>{
         cb(null, './subidaDoc')
     },
     filename: (req, file, cb)=>{
         cb(null, file.filename +'-' +Date.now() +path.extname(file.originalname))
     }
 });

 const upload = multer({storage});

 router.post('/subir', upload.single('file'), (req, res)=>{
    console.log('Storage location is ${req.hostname}/${req.file.path}');
    return res.send(req.file);
 });

 router.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory 
    myFile.mv(`${__dirname}/publica/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

 module.exports = router;