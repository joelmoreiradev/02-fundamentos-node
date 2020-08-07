
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
let getEmpleado = (id, callback) => {

    // esto es para buscar datos en el arreglo empleados
    // si el empleado que recibe por cada iteración, es igual al id que recibe getEmpleado (el que yo quiero buscar), retorno el empleado.
   let empleadoDB = empleados.find( empleado => empleado.id === id);
    
   // si no existe un empleado
   if(!empleadoDB) {
       callback(`No existe un empleado con el ID ${id}`);
   } else {
       callback(null, empleadoDB);
   }
}


getSalario = (empleado, callback) => {
    // esto es para buscar datos en el arreglo salarios, y verificar si hay un id igual al id de un empleado
    // de existir dicho id, guardo el objeto entero del salario en la variable salarioDB
    let salarioDB = salarios.find( salario => salario.id === empleado.id);

    if(!salarioDB){
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

}

getEmpleado(1, (err, empleado) => {

    if(err){
        return console.log(err);
    }

    
    getSalario(empleado, (err, resp) => {
        if(err){
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    });

});