let obj = {};

let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function () {
        return `${this.nombre} ${this.apellido}` //se pueden confundir las comillas esquinadas con ls comillas simples
    },
    domicilio: {
        calle: "Madero $144",
        Colonia :"Centro",
        CP:2800,
        municipio: "Colima"
    },
    getAdrees: function () {
        return `${this.domicilio.calle} ${this.domicilio.Colonia} ${this.domicilio.CP} ${this.domicilio.municipio} ` // error comun el no poner domicilio antes del atributo que le sigue
    }
}
console.log(persona);

console.log(persona.nombre);
console.log(persona.apellido);

//para aceder al contenido se pueden usar las "keys" las key es lo que pones despues de persona. es decit en este caso nombre es una key o apellido es una key

console.log(persona.getName());
console.log(persona.domicilio);
console.log(persona.getAdrees());
