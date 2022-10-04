const mongoose = require('mongoose');

let User = mongoose.model('Users');
let Medicine = mongoose.model('Medicines');

const petsSchema = mongoose.Schema({
    identifier: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    race:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    client:{
        required: true
    },
    medicine:{
        required: true
    }


});

module.exports = mongoose.model('Pets', petsSchema)