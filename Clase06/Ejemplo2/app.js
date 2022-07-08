const express = require('express')

const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
 })

 let visitas = 0
 app.get('/visitas', (req, res) => {
    res.send({ mensaje: `La cantidad de visitas es ${++visitas}` })
 })

 app.get("/fyh", (req, res) => {
    const fecha = new Date().toLocaleDateString()
    const hora = new Date().toLocaleTimeString()
    res.send({ fyh: `la fecha es ${fecha} la hora es ${hora}` });

});


const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))



