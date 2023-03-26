const express = require('express') // Se importa express;

let app = express();

let PORT = process.env.PORT || 3000; // Se indica el puerto del servidor
app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
// Se indica que se utilizará la codificación "urlencoded" para procesar las solicitudes del cliente

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('<html><head><title>Home</title></head><body><h1>Bienvenido al sistema de alumnos</h1><p>Por favor, visita la siguiente página para agregar un estudiante:</p><a href="/student">Agregar alumno</a></body></html>');
});
app.get('/student', (req, res) => {
    let t=req.params.id;
    res.render('student');
});

// Se define la ruta que dara respuesta que se enviará cuando se envíe un formulario para agregar un estudiante
app.post('/addStudent', (req, res) => {
    res.render('displayData', { 
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre,
    });
});
app.listen(PORT);