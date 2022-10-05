const express = require("express"),
medicinesSchema = require("../models/medicines"),
router = express.Router();

/*Crear medicamento*/
router.post('/new_medicine', (req, res) => {
    const medicine = medicinesSchema(req.body);
    medicine
        .save()
        .then((data) => res.json(data))
        .catch((error)=> res.json({message: error}));
});

module.exports = router;