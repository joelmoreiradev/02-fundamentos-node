
// esto es un callback
// en este caso es una función que se va a ejecutar cuando pasen 3 segundos

// setTimeout( () => {
//   console.log('Hola mundo');  
// }, 3000 );

// función
let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Joel',
        id: id
    }

    if(id === 20){
        callback(`El usuario con id ${id}, no existe en la BD`)
    } else {
      callback(null,usuario);  
    }


    
} 

// llamo a la función, le mando el id, y recibe el error o el usuario.
// primero siempre se recibe el error, así si no recibo el usuario recibo el error.
getUsuarioById(1, (err, usuario)=> {
    if(err){
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});