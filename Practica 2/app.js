function greet(){
    console.log("Hello");
}
greet()//invoke


//functions as parameters
function logGreeting(fn){
    fn();
};

logGreeting(greet);

//function expression
let greetMe = function(){
    console.log("Hello from the function expresion");

}
greetMe();

logGreeting(greetMe);

let mifuncion = () => {
    //codigo de la funcion 
}

mifuncion();

let saludo = (nombre,tratamiento)=>{
    console.log("Hola " + tratamiento + " " + nombre);
}
//invocamos
saludo("Miguel", "sr.");

let cuadrado = numero => {
    return numero * numero
}

var cuadrado2 = function(numero){
    return numero*numero
}

function cuadrado1 (numero){
    return numero*numero
}

console.log(cuadrado1(9));

let cuadrado3 = numero => {
    return numero * numero;
}
console.log(cuadrado3(8));



let cuadrado4 = numero => numero*numero;
console.log(cuadrado(7));


//Comentarios 
//En esta practica se explica que debido a que javascript toma las funciones como objetos se pueden declarar de diferentes maneras ya sea usando la palabra clave function o guardandola como expresion en una variable o inclusive omitiendo la palabra function y usar la forma de arrow function tambien detalles como que en caso de ser un parametro podemos ahorrarnos los parentesis o en caso de que la instruccion a realizar sea solo una linea podemos ahorrarnos la palabra return
