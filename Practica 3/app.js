/*function greet() {
    console.log("Hello");
}

let logGreeting = (miParametro) => miParametro()

logGreeting(greet);
*/

let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
    console.log("Hello from a funtion created on the fly")
} )

// Interpolacion  de strings clasica
let logGreeting1 = (miNombre,miColor) => {
    console.log("Hola" + miNombre + " buenos dias¡ tu color favorita es el " + miColor);
}
logGreeting1("Carlos","Azul")

//Template strings
let color="rosa";
let talla="M";
let modelo="Clasica";

console.log("Sofia tiene una playera talla" + talla + "de color" + color + "modelo" + modelo);

console.log(`Sofia tiene una playera talla ${talla} de color ${color} modelo ${modelo}`);

//Comentarios
//Realmente me cuesta un poco ver la utilidad de las funciones on the fly sin embargo puedo llegar a entender su funcionamiento y en el caso de la interpolacion es una gran alternativa a las concatenacion