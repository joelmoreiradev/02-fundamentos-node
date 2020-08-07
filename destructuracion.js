
// objeto literal
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // Se pueden poner funciones dentro de los objetos literales.
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

// imprimir el valor que regresa la función dentro del objeto
// console.log(deadpool.getNombre() );

// --------------------------------------------------
// extraer valores del objeto y ponerlos en variables

// nombre = deadpool.nombre;
// apellido = deadpool.apellido;
// --------------------------------------------------

// destructuración, para extraer las variables en una sola declaración
// esto extrae el nombre, apellido y poder del objeto deadpool.
let { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);

