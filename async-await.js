/*
*   Async Await
*/

// Función asíncrona, que retorna una Promesa por ser async
let getNombre = async () => {
    // lanzar un error personalizado
    // throw new Error('No existe un nombre para ese usuario');
    return 'Joel';
}

// esto sería como el resolve
getNombre().then(nombre => {
    console.log(nombre);
})

// manejar el error
.catch(e => {
    console.log('Error de Async', e);
})