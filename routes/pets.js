const express = require("express"),
router = express.Router();

const { ObjectId } = require("mongodb");
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
    petSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

//get a pet
router.get("/pets/:id", (request, response) => {
    const id = request.params.id;
    petSchema
        .findOne({"_id": id})
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

router.get("/petsUser/:idUser", (request, response) => {
    const idUser = request.params.idUser;
    petSchema
        .find({idUser: ObjectId(idUser)})
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

router.put("/update_pet/:id", (request, response) => {
    const id = request.params.id;
    const { identifier, name, race, age, weight} = request.body;
    petSchema
        .updateOne({_id: id}, { $set: {identifier, name, race, age, weight} })
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

router.delete("/delete_pet/:id", (request, response) => {
    const id = request.params.id;
    petSchema
        .deleteOne({_id: id})
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});
module.exports = router;