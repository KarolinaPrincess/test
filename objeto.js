const persona = {
    nombre : "Carlos",
    apellido: "Perez",
    edad: 20,
    "titulo profesional": "ing sistemas",

        mostrar: function() {
            return this.nombre;

        }
    }
    const persona2 = {...persona};
    persona2.nombre = "pedro";

    console.log(persona2);
//console.log(persona.mostrar()); 
//console.log(persona["titulo profesional"])

/*function persona (nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const carlos = new persona("carlos","perez");

console.log(persona.carlos)

function saludar(saludo,nombre){
    this.saludar = saludo;
    this.nombre = nombre;
}

const nuevo = {
    saludar : "Hola me llamo",
    apellido: "Carlos",
}*/

//let mir = [1,2.3] spread operate

//console.log(saludar.nuevo)

let miArr = [1,2,3];
console.log(...miArr);