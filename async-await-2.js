/*
*   Async Await
*/

let getNombre = () => {
    return new Promise( (resolve, reject) => {
        
        // cuando se llame la función getNombre, a los 3 segundos voy a tener el resultado.
        setTimeout(() => {
            resolve('Joel');
        }, 3000);

        
    });
}

let saludo = async () => {

    let nombre = await getNombre();
    return `Hola ${nombre}`
}



// ejecuto la función, recibo el "mensaje", y lo imprimo.
saludo().then(mensaje => {
    console.log(mensaje);
   
    
})

// manejar el error

