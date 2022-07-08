// const fs = require('fs');
// const { CLIENT_RENEG_LIMIT } = require('tls');

const  fs = require("fs");

// const obj = {
//   id: 0,
//   nombre: "HotWheels",
//   precio: "$100.00",
//   thumbnail: "Image"
// }
// const objString = JSON.stringify(obj);
// console.log(obj);
// console.log(objString);

// // const objetoTres = JSON.parse(objString)
// console.log(objString.nombre);





class Contenedor {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }
    async save (producto){
        try {
            const data = await fs.promises.readFile(this.nombreArchivo, "utf-8");
            const productos = JSON.parse(data); //Convertir a objeto
            const newProduct = {
                id: id,
                nombre: producto.nombre,
                precio: producto.precio,
                thumbnail: producto.thumbnail,
            }
            productos.push(newProduct)
          } catch (error) {
            console.log(error)
          }
        }

    async getAll(){
      fs.promises.readFile(this.nombreArchivo, "utf-8")
      .then( productos =>{
        const conversor = JSON.parse(productos)
        console.log(conversor);
      })
    }

    async getBYId(id){
      fs.promises.readFile(this.nombreArchivo, "utf-8")
      .then( productos =>{
        const arrayProducts = JSON.parse(productos)
        // console.log(arrayProducts);
        const found = arrayProducts.find((Object) => { 
          return Object.id == id;         
        })
        console.log(found);
      })
    }
 }

const prueba1 = new Contenedor("./products.json");

prueba1.getBYId(3)