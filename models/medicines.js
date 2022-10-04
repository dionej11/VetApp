const mongoose = require("mongoose");

const medicinesSchema = mongoose.Schema({
    code: {
        type: String,
        require: true
    },
    nameMedicine: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    doses: {
        type: Number,
        require: true
    }
});
module.exports = mongoose.model('Medicines', medicinesSchema);