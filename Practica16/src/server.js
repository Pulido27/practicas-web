let express = require('express');//se llama a express
let app = express();
let personsRoute = require('./routes/person');
app.set('view engine', 'ejs');

//Para manejar todas las solicitudes a la raíz del sitio
app.use(personsRoute);


app.use('/assets', express.static(__dirname + '/public'));//se establece la ruta estatica


let PORT = process.env.PORT || 3000; //ponemos el puerto que escucha


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});//se pone a escuchar al puerto