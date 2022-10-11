const express = require("express"),
userSchema = require("../models/user"),
medicinesSchema = require("../models/medicines"),
router = express.Router();

router.get("/report", (request, response) => {
    try {
        const USERS = userSchema.find();
        const MEDICINES = medicinesSchema.find();

        let userFilter = USERS.map((elm) => {
            return {full_name: `${elm.names} ${elm.surnames}`, cedula: elm.cc}
        });

        let medicineFilter = MEDICINES.map((elm) => {
        return (elm.nameMedicine).toUpperCase().trim()
        });
        
        let medicineNoDuplicate = [...new Set(medicineFilter)];

        response.json([userFilter, medicineNoDuplicate]);
    } catch(error) {
        response.json({message: error})
    }
});

module.exports = router;