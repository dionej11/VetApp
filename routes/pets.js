const express = require("express"),
router = express.Router();

const petSchema = require('../models/pets');

router.post("/create_pet/:idUser", (request, response) => {
    /*Captura el id del dueño de la mascota por medio de los params (url) */
    const idUser = request.params.idUser;
    /*Se añade el id del dueño de la mascota a la data */
    const data = {...request.body, "idUser": idUser};
    /*Uso del esquema para la valdación de los campos */
    const pet = petSchema(data);
    pet.save()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

router.get("/pets", (request, response) => {
    userSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

//get a pet
router.get("/pets/:id", (request, response) => {
    const { id } = request.params;
    userSchema
        .findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

router.put("/update_pet/:id", (request, response) => {
    const { id } = request.params();
    const { identifier, name, race, age, weight} = request.body;
    userSchema
        .updateOne({_id: id}, { $set: {identifier, name, race, age, weight} })
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

router.delete("/delete_pet/:id", (request, response) => {
    const { id } = request.params();
    userSchema
        .remove({_id: id})
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});
module.exports = router;