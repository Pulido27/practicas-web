const express = require('express') // se inyecta el paquete
const app = express()

app.get('/', function (req, res) { // se le llama a la ruta raiz para que ejecute la funcion desde ahi
  res.send('Hello World') 
})



app.get('/uno', function (req, res) { // se le llama a la ruta /uno para que ejecute la funcion desde ahi
  res.send('Hello World, from route One') 
})

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
      <h1>hola</h1>
  </body>
  </html>`) 
})

app.listen(3000)