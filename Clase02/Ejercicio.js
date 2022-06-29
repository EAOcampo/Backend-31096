//**** Ejercicios en clase 1****

// function mostrarLista(arr) {
//     if(arr.length){
//         console.log(arr);
//     }else{
//         console.log('Lista vacia ');
//     }
// }
// mostrarLista([1,2,3])

// ****Ejercicio en clase 2 ****

// (function (arr) {
//     if(arr.length){
//         console.log(arr);
//     }else{
//         console.log('Lista vacia ');
//     }
// })([1,2,3,4,5,6,7,8,9,10])

// **** Ejercicio en clase 3 ****

// function crearMultiplicador(num1){
//     return function(num2){
//         console.log(num1*num2);
//     }
// }
// const multiplicar = crearMultiplicador(4)
// multiplicar(5)

// Ejemplo de clases PERSONA 

// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre
//         this.edad = edad
//     }
 
//     static saludoCorto = 'hola'
 
//     saludoCompleto() {
//         console.log(`buenaaass, soy ${this.nombre}`)
//     }
 
//     saludoEstatico() {
//         console.log(Persona.saludoCorto)
//     }
//  }
// const p2 = new Persona('Edgar', 26)
// p2.saludoCompleto()
// p2.saludoEstatico()
// console.log(p2);

// Ejercicio en clase 4


class Contador {
    constructor(nombre, cuenta){
        this.nombre = nombre;
        this.cuenta = cuenta;
    }
    static valorEstatico = 0;
    obtenerResponsable() {
        return this.nombre;
    }
    obtenerCuentaIndividual() {
        return this.cuenta;
    }
    obtenerCuentaGlobal() {
        return Contador.valorEstatico;
    }
    contar() {
        Contador.valorEstatico++;
        this.cuenta++;
    }
}

const persona = new Contador('Edgar',5000);
persona.obtenerCuentaGlobal()
console.log(persona);
