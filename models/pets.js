const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const petsSchema = mongoose.Schema({
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
    idUser:{
        type: ObjectId
    }
    //client: { type: Schema.ObjectId, ref: "Users" },

    //medicines: { type: Schema.ObjectId, ref: "Medicines" }
});

module.exports = mongoose.model('Pets', petsSchema)