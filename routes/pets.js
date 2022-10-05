const express = require("express"),
router = express.Router();

const { response } = require("express");
const userSchema = require('../models/pets');

router.post("/create_pet", (request, response) => {
    //creación de la estructura
    const pet = userSchema(request.body);
    pet
        .save()
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