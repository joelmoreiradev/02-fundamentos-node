// let nombre = 'Wolverine';

// if(true){
//     let nombre = 'Magneto'
// }
// let nombre = 'Wolverine1';
// let nombre = 'Wolverine2';
// let nombre = 'Wolverine3';
// let nombre = 'Wolverine4';
// console.log(nombre);

// Usar let es mejor que var.

// ----------------------------------------
let i = 'Hola mundo';

// dentro de las llaves del for existe otro i totalmente diferente al del Hola mundo
for(let i = 0; i <= 5; i++){
    // esto imprime el i del for.
    console.log(`i: ${i}`);
}

// Esto imprime el Hola mundo
console.log(i);