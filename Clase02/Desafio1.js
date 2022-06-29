class Usuario {
    constructor(nombre,apellido,autor,nombreLibro,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = [
            {autor: autor, nombre: nombreLibro}
        ];
        this.mascotas = mascotas;
    }
    getFullName(){
        return `Mi nombre es ${this.nombre} ${this.apellido}`
    }
    addMascotas(pet){
        this.mascotas.push(...pet)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBooks(book) {
        this.libro.push(book);
    }
    getBookNames(){
        const bookAuthor = this.libro.map((book) => {
            console.log(book);
            return book.nombre
        })
        return bookAuthor;
    }

}

const usr1 = new Usuario('Edgar','Ocampo','Pablito','el viejo y el mar',['patito','perrito','sapo']);
const contador = usr1.countMascotas()
const books = usr1.getBookNames()
const nombre = usr1.getFullName()

console.log(usr1);
console.log(contador);
console.log(books);
console.log(nombre);