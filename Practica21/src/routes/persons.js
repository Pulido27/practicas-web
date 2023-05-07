const express = require("express"); // Importa la librería Express
const router = express.Router(); // Crea una instancia del enrutador de Express
const mongoose = require("mongoose"); // Importa la librería Mongoose para conectarse a MongoDB
let Person = require('../models/persons'); // Importa el modelo 'Person' para interactuar con la base de datos

// Manejador de la ruta GET '/gente'
router.get('/gente',async (req,res)=>{
    const Persons = await Person.find({}); // Busca todos los documentos en la colección 'Person'
    res.render('persons.ejs',{Persons}); // Envia los documentos pero ahora con el formato echo en ejs
})


router.get('/addPerson',(req,res)=>{  //ruta para añadir alumnos
    res.render(('addPerson'));
});

router.post('/addPerson',(req,res)=>{   //ruta de configuracion de la anterior
    const newPerson = Person({
        nombre: req.body.nombre,
        edad:req.body.edad,
        tipoSangre:req.body.tipoSangre,
        nss: req.body.nss
    });

    newPerson
    .save()
    .then((data)=>{res.redirect('/gente')})
    .catch((error)=>{res.json({message:error})})


})

router.get('/findById/:id', (req, res)=>{     //ruta de actualizacion de persona
    Person.findById(req.params.id)
    .then((myPerson)=>{res.render('personUpdate', {myPerson})})
    .catch((error)=>{res.json({message:error})});
}); 

router.post('/updatePerson',(req,res)=>{
    Person.findByIdAndUpdate(req.body.objId,
        {
        nombre:req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss

        }).then((data)=>{res.redirect('/gente')}).catch((error)=>{res.json({message:error})})
})


module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación