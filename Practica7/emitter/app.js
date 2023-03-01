//var Emitter = require('./emitter'); //se llama a emitter 
var Emitter = require('events'); //se usa el emisor de eventos de node
var config = require("./config");

var emtr = new Emitter(); // se crea la instancia 

emtr.on(config.events.GREET, function(){     // aqui se importa desde el modulo config 
     console.log('Somewhere, someone said hello.');
});

emtr.on("greet", () => { 
     console.log('A greeting occurred!');
});

console.log("Hello!");
emtr.emit('greet');

console.log(emtr)

//En esta practica se modificaron 2 cosas se cambio nuestro emisor de eventos por el de node y funcionaba igual incluso mejor despues se cambio el usar directamente la palabra greet por exportarla de un objeto creado en el config.js 