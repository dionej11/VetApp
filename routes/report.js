const express = require("express"),
userSchema = require("../models/user"),
medicinesSchema = require("../models/medicines"),
router = express.Router();

router.get("/reportUsers", (request, response) => {
    const pipeline  = [
        {
          '$project': {
            '_id': 0, 
            'names': 1, 
            'surnames': 1
          }
        }
      ];
    userSchema.aggregate(pipeline)
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
});
router.get("/reportMedicines", (request, response) => {
    const pipeline  = [
        {
          '$project': {
            '_id': 0, 
            'nameMedicine': 1
          }
        }
      ];
    medicinesSchema.aggregate(pipeline)
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
});

module.exports = router;