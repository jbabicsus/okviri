const mongoose = require("mongoose");
const instruktorSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    fromTime: {
        type: String,
        required: true
    },
    toTime: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

const instruktorModel = mongoose.model('instruktori', instruktorSchema); // Preimenovano u 'Instruktor'
module.exports = instruktorModel;
