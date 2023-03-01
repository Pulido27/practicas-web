const express = require('express') // se inyecta el paquete
const app = express()

app.get('/', function (req, res) { // se le llama a la ruta raiz para que ejecute la funcion desde ahi
  res.send('Hello World') 
})

app.listen(3000)

//con esta practica aprendimos a como levantar un servidor local http 