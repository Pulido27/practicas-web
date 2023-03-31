let express = require('express'); //se llama a express
let router = express.Router();//se crea la instancia


router.get('/person', (req, res) => {
    //se define la ruta
    res.send('haz solicitado un listado de personas');
});

module.exports = router;