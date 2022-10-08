const express = require("express"),
userSchema = require("../models/user"),
router = express.Router();

/*Crear usuario*/
router.post('/create_user', (request, response) => {
    /*Uso del esquema para la valdación de los campos */
    const user = userSchema(request.body);
    /*Se verifica si ya existe el usuario a ingresar*/
    if (userSchema.find({cc: request.body.cc }) == null) {
        response.json({"msj":"existe"});
    } else {
        user
            .save()
            .then((data) => response.json(data))
            .catch((error)=> response.json({message: error}));
    }
});
/*Eliminar usuario*/
router.delete("/delete_user/:cedula", (request, response) => {
    const cedula = request.params.cedula;
    userSchema
        .remove({"cc": cedula})
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});
/*Actualizar usuario*/
router.put("/update_user/:cedula", (request, response) => {
    const cedula = request.params.cedula;
    const { names, surnames, address, phoneNumber } = request.body;
    userSchema
        .updateOne({"cc": cedula}, { $set: {names, surnames, address, phoneNumber} })
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});
/*Ver un usuario*/
router.get("/users/:cedula", (request, response) => {
    const cedula = request.params.cedula;
    userSchema
        .findOne({"cc": cedula})
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});
/*Ver usuarios*/
router.get("/users", (request, response) => {
    userSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

module.exports = router;