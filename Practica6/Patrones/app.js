let greet = require("./greet1");
//let greet2 = require("./greet2").greet;

let greet2a = require("./greet2");


greet();
greet2a.greet();

const greet3 = require("./greet3"); //objeto construido/instanciado
console.log(greet3);
greet3.greet();

greet3.greeting = "hello from the app"

let greet3b = require("./greet3");
greet3b.greet();           // aqui da el resultado modificado de la otra variable ya que al exportar un objeto construido las 2 variables declaradas apuntan al mismon espacio de memoria 

const Greet4 = require("./greet4"); //constructor
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require("./greet5");
greet5.greet();

greet5.cris();

greet5.pul();