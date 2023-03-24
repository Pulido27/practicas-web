var express = require('express');// se llama a express
var app = express();

var PORT = process.env.PORT || 3000; // se escoge el puerto

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/person/:id', function(req, res) {
    var message = req.query.message;
    var times = parseInt(req.query.times); // ahora ya no se llama de la coleccion paramms si no de un query
    var person = req.params.id;
    switch (message) {
        case "Hola":
        case "Adios":
        case "Bienvenido":
            break;
        default:
            message = "Hola";
    }

    var cad = "";
    if (!isNaN(times) && times > 0) {//parte del codigo que se encarga de hacer el ciclo de cuantas veces se repita el message
        for (var i = 0; i < times; i++) {
            cad+= message + " " + person + "\n";
        }
    }

    res.render('person', {//parte donde se renderiza el ejs
        ID: req.params.id,
        message: message,
        times: times,
        cad: cad
    });
});

app.listen(PORT);