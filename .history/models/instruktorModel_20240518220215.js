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
    email: {
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
    timings: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
}, {
    timestamps: true
});

const instruktorModel = mongoose.model('instruktor', instruktorSchema);
module.exports = instruktorModel;
