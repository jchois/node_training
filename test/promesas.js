let empleados = [{
    id: 1,
    nombre: 'Juliana'
}, {
    id: 2,
    nombre: 'Maria'
}, {
    id: 3,
    nombre: 'Pedro'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });
}

getEmpleado(20).then(empleado => {
    console.log('Empleado de BD', empleado);
})