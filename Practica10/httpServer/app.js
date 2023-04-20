const express = require('express') // se inyecta el paquete
const app = express()

app.get('/', function (req, res) { // se le llama a la ruta raiz para que ejecute la funcion desde ahi
  res.send('Hello World') 
})

;var port = process.env.PORT || 3000 //seteamos el puerto para que escuche del servidor

app.get('/prueba', function (req, res) { // se le llama a la ruta /prueba para que ejecute la funcion desde ahi
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>hello word</h1>
  </body>
  </html>`) 
})

//segunda ruta /api regresa un objeto json 
app.get('/api',function (req,res){
  res.json({fisrtname: 'john', lastname: 'Doe'});
})

//tercera ruta recibe un parametro

app.get('/person/:id', function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>Person:`+ req.params.id +`</h1>
  </body>
  </html>`) 
})

app.listen(port);