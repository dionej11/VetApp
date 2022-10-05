const express = require("express"),
userSchema = require("../models/user"),
router = express.Router();

/*Crear usuario*/
router.post('/new_user', (req, res) => {
    /*Uso del esquema para la valdación de los campos */
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error)=> res.json({message: error}));
});

module.exports = router;