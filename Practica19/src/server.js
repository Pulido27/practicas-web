const express = require("express") //inyectamos express
const mongoose =require('mongoose'); //inyectanos mongoose

const personsRoutes=require("./routes/persons") //inyectanos el router de personas
require('dotenv').config(); //inyectanos la variable de anbiente para MONGODB_URI

mongoose.Promise = global.Promise;
const app = express(); // instaciamos aplicacion de express
const port = process.env.PORT || 3000; // configuranos puerto de escucha

app.set("view engine", 'ejs'); //establecemos el valor para el motor de vistas
app.use(express.urlencoded({extended:false}));
app.use(personsRoutes); //utilizanos el router de personas

mongoose.connect(process.env.MONGODB_URI) //conectanos a base de datos
.then(()=>console.log("Conectado a TEST"))
.catch((error)=>console.error(error));



app.listen(port,()=>console.log(`Escuchando en el puerto ${port}`)); //levantar servidor
