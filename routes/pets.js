const express = require("express"),
router = express.Router();

const petSchema = require('../models/pets');

router.post("/create_pet/:idUser", (request, response) => {
    /*Captura el id del dueño de la mascota por medio de los params (url) */
    const idUser = request.params.idUser;
    /*Se añade el id del duelo de la mascota a la data */
    const data = {...request.body, "idUser": idUser};
    /*Uso del esquema para la valdación de los campos */
    const pet = petSchema(data);
    pet.save()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
})

module.exports = router;