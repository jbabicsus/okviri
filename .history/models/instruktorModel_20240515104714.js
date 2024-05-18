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
    {
        isInstruktor: {
            type:Boolean,
            default: false,
        }
    },
    
},{
    timestamps: true
});

const Instruktor = mongoose.model('Instruktor', instruktorSchema); // Preimenovano u 'Instruktor'
module.exports = Instruktor;
