const mongoose = require('mongoose');

//let Users = mongoose.model('Users');
//let Medicines = mongoose.model('Medicines');

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
    //client: { type: Schema.ObjectId, ref: "Users" },

    //medicines: { type: Schema.ObjectId, ref: "Medicines" }
});

module.exports = mongoose.model('Pets', petsSchema)