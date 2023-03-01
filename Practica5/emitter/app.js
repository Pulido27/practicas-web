var Emitter = require('./emitter'); //se llama a emitter 
var emtr = new Emitter(); // se crea la instancia 

emtr.on("greet", function(){ 
     console.log('Somewhere, someone said hello.');
});

emtr.on("greet", () => { 
     console.log('A greeting occurred!');
});

console.log("Hello!");
emtr.emit('greet');

console.log(emtr)