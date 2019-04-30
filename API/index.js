const colors = require('colors')
const port = process.env.port || 3000
const app = require('./app')
const nodemon = require('nodemon')
const mongoose = require('mongoose')

// Conexión a la base de datos y en el puerto 3000

mongoose.connect('mongodb://localhost/RedCore', { useNewUrlParser: true }, (err, res) =>{
    if(err){
        return console.log(`ERROR AL CONECTAR A LA BASE DE DATOS ${err}`.red)
    }
    console.log('Conexión con la base de datos establecida'.green)
    app.listen(port, () => {
        console.log(`El servidor esta siendo utilizado en el puerto ${port}`.green)
    });
})