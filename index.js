const express = require("express"),
    //path = require("path"),
    app = express(),
    puerto = 3000;

    //se llaman a las rutas que contienen las peticiones
    app.use(express.json());
    app.use(require('./routes/clients.js'));

app.get('/', (peticion, respuesta) => {
    console.log('hola nodemon');
    respuesta.json({
        saludo: `hola isaaaa!!! como vas`
    })
});

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${puerto}`);
});