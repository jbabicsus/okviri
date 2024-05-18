const express = require('express');
const router = express.Router()
import authMiddleware from '../middlewares/authMiddleware';

const User = require('../models/userModel');
const Instruktor = require('../models/instruktorModel');

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
        const user = await User.find({});
        res.status(200).send({
            message : "User fetched successfully",
            success: true,
            data: user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ 
            message: "Error applying user account",
            success: false,
            error
         });
    }
});

module.exports=router
