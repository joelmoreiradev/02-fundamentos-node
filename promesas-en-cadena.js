// "base de datos"
let empleados = [{
    id: 1,
    nombre: 'Joel'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];



// función para obtener empleado por el id
let getEmpleado = (id) => {

   return new Promise((resolve, reject) => {
        // esto es para buscar datos en el arreglo empleados
    // si el empleado que recibe por cada iteración, es igual al id que recibe getEmpleado (el que yo quiero buscar), retorno el empleado.
   let empleadoDB = empleados.find( empleado => empleado.id === id);
    
   // si no existe un empleado
   if(!empleadoDB) {
       reject(`No existe un empleado con el ID ${id}`);
   } else {
       resolve(empleadoDB);
   }
   
}); // fin de Promesa

} // fin de función getEmpleado

let getSalario = (empleado) => {
    return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find( salario => salario.id === empleado.id);

    if(!salarioDB){
        reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
    } else {
        resolve({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

    });
}


// lo primero es el resolve, luego en el (err) es el reject.
getEmpleado(10).then( empleado => {
    // console.log('Empleado de BD', empleado);

    return getSalario(empleado);

    

})
.then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
})
.catch(err => {
    console.log(err);
})