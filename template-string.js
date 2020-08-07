
let nombre = 'Deadpool';

let real = 'Wade Winston';


// // console.log(nombre + ' ' + real);
// // console.log(`${nombre} ${real}`);

// let nombreCompleto = nombre + ' ' + real;
// let nombreTeamplate = `${nombre} ${real}`

// // imprime true, sintácticamente son exáctamente iguales.
// console.log(nombreCompleto === nombreTeamplate);

// función
function getNombre(){
    return `${nombre} ${real}`
}

console.log(`El nombre de: ${getNombre()}`);