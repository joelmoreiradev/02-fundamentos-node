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
let getEmpleado = async (id) => {

  
        // esto es para buscar datos en el arreglo empleados
    // si el empleado que recibe por cada iteración, es igual al id que recibe getEmpleado (el que yo quiero buscar), retorno el empleado.
   let empleadoDB = empleados.find( empleado => empleado.id === id);
    
   // si no existe un empleado
   if(!empleadoDB) {
       throw new Error(`No existe un empleado con el ID ${id}`);
   } else {
       return empleadoDB;
   }

} // fin de función getEmpleado

let getSalario = async (empleado) => {
    
        let salarioDB = salarios.find( salario => salario.id === empleado.id);

    if(!salarioDB){
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }

}


let getInformacion = async (id) => {

   let empleado = await getEmpleado(id);
   let resp = await getSalario(empleado);

   return `${resp.nombre} tiene un salario de $ ${resp.salario}`

    
}


getInformacion(2).then(mensaje => {
    console.log(mensaje);
}) 
// manejar el error.
.catch(e => {
    console.log('Error:', e);
})