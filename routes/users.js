const express = require("express"),
router = express.Router();

/*Crear usuario*/
router.post('/new_user', (req, res) => {
    res.send("create user")
});

module.exports = router;