const { ObjectId } = require('mongodb');
const mongoose = require("mongoose");

const medicinesSchema = mongoose.Schema({
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
    },
    idPet: {
        type: ObjectId
    }
});
module.exports = mongoose.model('Medicines', medicinesSchema);