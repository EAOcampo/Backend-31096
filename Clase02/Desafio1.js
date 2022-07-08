class Usuario {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = []
        this.mascotas = [];
    }
    getFullName(){
        return `Mi nombre es ${this.nombre} ${this.apellido}`
    }
    addMascotas(pet){
        this.mascotas.push(pet)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBooks(book,author) {
        this.libro.push({titulo:book, autor:author});
    }
    getBookNames(){
        const book = []
        this.libro.forEach(libros=>book.push(libros.titulo))
        return book
    }

}

// Pruebas con los Libros
const usr1 = new Usuario('Edgar','Ocampo');
usr1.addBooks('Harry potter ', 'J.K. Rowling')
usr1.addBooks('Habitos Atomicos', 'James Clear')
usr1.addBooks('el extraño caso del dr. jekyll y mr. hyde ', 'Robert Louis Stevenson')
console.log(usr1.libro);

// Pruebas agregando animales

usr1.addMascotas('Perico')
usr1.addMascotas('Pollo')
usr1.addMascotas('Pato')
usr1.addMascotas('Elefante')
console.log(usr1.mascotas);
usr1.addMascotas('Gato')
console.log(usr1.mascotas);
console.log(usr1.countMascotas());


