const express = require('express') // se inyecta el paquete
const app = express()

var port = process.env.PORT || 3000; //seteamos el puerto para que escuche del servidor
app.set('view engine', 'ejs');
app.use('/assets',express.static(__dirname + '/public'))

app.use('/',function(req,res,next){
  console.log('Request Url:' + req.url);
  next();
});

app.get('/', function (req, res) { // se le llama a la ruta raiz para que ejecute la funcion desde ahi
  res.render('index.ejs'); 
})

app.get('/prueba', function (req, res) { // se le llama a la ruta /prueba para que ejecute la funcion desde ahi
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="/assets/style.css" type="text/css" rel="stylesheet">
      <title>Document</title>
  </head>
  <body>
      <h1>hello word2</h1>
  </body>
  </html>`) 
})

//segunda ruta /api regresa un objeto json 
app.get('/api',function (req,res){
  res.json({fisrtname: 'john', lastname: 'Doe'});
})

//tercera ruta recibe un parametro

app.get('/person/:id', (req, res) => {
  const id = req.params.id;
  res.render('person', { id });
});

let data = [
  { id: 1, nombre: "Hugo", apellido: "Estrada Ramirez", edad: 18},
  { id: 2, nombre: "Estrella", apellido: "Perez Suarez", edad: 17},
  { id: 1, nombre: "Diana", apellido: "Contreras Morales", edad: 18},
];

app.get('/personas', function (req, res) {
  res.render('personas', {data});
});

app.listen(port);