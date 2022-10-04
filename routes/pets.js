const express = require("express"),
router = express.Router();

const { response } = require("express");
const userSchema = require('../models/pets');

router.post("/create_pet", (request, response) => {
    //creación de la estructura
    const pet = userSchema(request.body);
    pet.save()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
})

module.exports = router;