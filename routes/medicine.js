const express = require("express"),
medicinesSchema = require("../models/medicines"),
router = express.Router();

/*Crear medicamento*/
router.post('/create_medicine/:idPet', (request, response) => {
    /*Captura el id del dueño de la mascota por medio de los params (url) */
    const idPet = request.params.idPet;
    /*Se añade el id del dueño de la mascota a la data */
    const data = {...request.body, "idPet": idPet};
    /*Uso del esquema para la valdación de los campos */
    const medicine = medicinesSchema(data);
    medicine
        .save()
        .then((data) => response.json(data))
        .catch((error)=> response.json({message: error}));
});
/*Eliminar medicina*/
router.delete("/delete_medicine/:idMed", (request, response) => {
    const idMed = request.params.idMed;
    medicinesSchema
        .remove({"_id": idMed})
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});
/*Actualizar medicina*/
router.put("/update_medicine/:idMed", (request, response) => {
    const idMed = request.params.idMed;
    const { names, description, doses } = request.body;
    medicinesSchema
        .updateOne({"_id": idMed}, { $set: { names, description, doses } })
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});
/*Ver una medicina*/
router.get("/medicines/:idMed", (request, response) => {
    const idMed = request.params.idMed;
    medicinesSchema
        .findOne({"_id": idMed})
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});
/*Ver medicinas*/
router.get("/medicines", (request, response) => {
    medicinesSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }));
});

module.exports = router;