
// función normal

// function sumar(a, b){
//     return a + b;
// }


// la misma función pero con flecha.
// let sumar = (a, b) => a + b;

// console.log( sumar(10, 20) );

// let saludar = (nombre) => `Hola, ${nombre}`;


// console.log(saludar('Joel'));


// objeto literal
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // Se pueden poner funciones dentro de los objetos literales.
    getNombre(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre() );