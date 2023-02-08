
// llame una funcionalidad especifica del paquete
const { toCelsius } = require('celsius');
 
console.log(toCelsius(100)); // 38
console.log(toCelsius(100, 3)); // 37.778
console.log(toCelsius('105.981 degrees F', 5)); // 41.10056

//llame otra funcionalidad especifica del paquete
const { toFahrenheit } = require('celsius');
 
toFahrenheit(36); // 97
toFahrenheit(36.68, 3); // 98.024
toFahrenheit('-40.691 degrees C', 5); // -41.24380 

//aqui creo una contante para guardar todas la funcionalidades del paquete que estoy llamando
//ERROR : un error que tuve aqui fue el no poner el nombre de la funcion antes de usar el metodo
const pul = require("celsius");

console.log(pul.toCelsius(20));
console.log(pul.toFahrenheit(20));