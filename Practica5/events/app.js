let obj = {
    nombre: "Cristian",
    edad: 44,
    apellido: "Pulido",
    keypress: function () {
        return("se ha presionado una tecla");
    },
    mouseOver: function() {
        return("El puntero del mouse esta arriba"); //no es necesario poner console.log aqui ya que el return devueleve el valor para imprimirlo despues si no seria redundante
    }
}

console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "nombre"
console.log(obj[myKey]);

myKey = "keypress";
console.log(obj[myKey]());
//Tuve un error den tipeo puse una mayuscula donde no era y el compilador me dijo que no era una funcion
myKey = "mouseOver";
console.log(obj[myKey]());

let myArray = [];
myArray.push(4);
myArray.push("una cadena");
myArray.push(function(){
    return("hola desde el array");
})

console.log(myArray);

let funcArray = [];
funcArray.push(()=> {
    console.log("function 1")
});

funcArray.push(()=> {
    console.log("function 2")
});

funcArray.push(()=> {
    console.log("function 3")
});

funcArray.forEach((item) => {
    item();
})



// en esta ultima parte llenamos un vector con funciones y con un foreach se llama cada elemento y ejecuta como funcion osea se invoca.