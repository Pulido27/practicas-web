const express = require('express') // se inyecta el paquete
const mongoose = require('mongoose');//se inyecta mongoose
require('dotenv').config();
const app = express()

var port = process.env.PORT || 3000; //seteamos el puerto para que escuche del servidor
app.use("/", function (req, res, next) {
  console.log("Solicitud recibida: " + req.url);
  next();
});

app.get('/', function (req, res) { // se le llama a la ruta raiz para que ejecute la funcion desde ahi
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
  </head>
  <body>
      <h1>Hello word!</h1>
  </body>
  </html>`) 
})

//conexion de mongodb
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("CONECTADO A MONGO DB ATLAS")).catch((error)=>console.error(error));

app.listen(port);