const mongoose = require('mongoose');

const instruktorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const instruktorModel = mongoose.model('instruktori', instruktorSchema);
model.exports = instruktorModel;