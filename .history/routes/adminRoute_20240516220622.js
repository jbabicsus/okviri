const express = require('express');
const router = express.Router()

const User = require('../models/userModel');
const Doctor = require('../models/instruktorModel');

router.get('/get-all-instruktor', authMiddleware, async (req, res) => {
    try {
        const instruktor = await instruktor.find({});
        res.status(200).send({
            message : "Instruktor fetched successfully",
            success: true,
            data: instruktor
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ 
            message: "Error applying instruktor account",
            success: false,
            error
         });
    }
});

router.get('/get-all-users', authMiddleware, async (req, res) => {
    try {
        const instruktor = await instruktor.find({});
        res.status(200).send({
            message : "Instruktor fetched successfully",
            success: true,
            data: instruktor
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ 
            message: "Error applying instruktor account",
            success: false,
            error
         });
    }
});
