class Empleado {
    constructor(nombre, edad){
        this.nombre =  nombre;
        this.edad = edad; 
    }

    saludo(){
        console.log(`${this.nombre}`);
    }
}

module.exports = Empleado;