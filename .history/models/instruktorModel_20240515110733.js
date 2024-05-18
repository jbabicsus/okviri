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
    },
    isInstruktor: {
        type:Boolean,
        default: false,
    },
    isAdmin: {
        type:Boolean,
        default: false,
    },
    seenNotifications: {
        type:Array,
        default: [],
    },
    unseenNotifications: {
        type:Array,
        default: [],
    },
},{
    timestamps: true
});

const Kandidat = mongoose.model('Kandidat', kandidatSchema); // Preimenovano u 'Instruktor'
module.exports = Kandidat;
