class Contador{
    constructor(nombre,cuenta){
        this.nombre = nombre;
        this.cuenta = cuenta;
    }
    obtenerResponsable(){
        return `El responsable de la cuenta es ${this.nombre}`;
    }

}

const p1 = new Contador('Edgar',500)
console.log(p1)

console.log(p1.obtenerResponsable());
