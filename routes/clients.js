const express = require('express');
const RouterClients = express.Router();

const MongoDB = require('../mongodb/clientMongo');
const clienteMongo = new MongoDB();

RouterClients.post('/gato', async (request, response) => {
    let result = await clienteMongo.pruebita(request.body.nameCat);
    response.json({
        result,
        msj: 'hola funcionó el gatito'
    })
});

module.exports = RouterClients;
