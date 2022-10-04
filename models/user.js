const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    cc: {
        type: String,
        require: true
    },
    names: {
        type: String,
        require: true
    },
    surnames: {
        type: String,
        require: true
    },
    address: {
        type: Number,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    }
});
module.exports = mongoose.model('Users', usersSchema);