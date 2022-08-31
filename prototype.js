function Persona(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function(){
        return "hola mundo";
    }
}

const personita = new Persona("Carlos","Alvarez");
const personita2 = new Persona("Nancy","Bernal");

//console.log(Persona.getPrototypeOf(personita));
//console.log(Object.prototype);
//console.log(Object.keys(personita));
//console.log(Persona.prototype);
//console.log(Object.values(personita));

/*console.log(personita.prototype);
console.log(personita instanceof Object);
console.log(Persona.prototype);*/

function Estudiante(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Estudiante.prototype = Persona.prototype;
 
Estudiante.prototype.despedida = function(){
    return "nos vemos luego";

}

Persona.prototype.despedida = function(){
    return "nos vemos";

}

miEstudiante = new Estudiante ("jorhitoo","Perez")

console.log(Estudiante.prototype.despedida());
console.log(Persona.prototype.despedida());
console.log(miEstudiante.prototype);


