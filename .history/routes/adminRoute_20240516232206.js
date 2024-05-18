const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const User = require('../models/userModel');
const Instruktor = require('../models/instruktorModel');

router.get('/get-all-instruktor', authMiddleware, async (req, res) => {
    try {
        const instruktor = await Instruktor.find({});
        res.status(200).send({
            message: "Instruktor fetched successfully",
            success: true,
            data: instruktor
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error fetching instruktor data",
            success: false,
            error
        });
    }
});

router.get('/get-all-users', authMiddleware, async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).send({
            message: "User fetched successfully",
            success: true,
            data: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error fetching user data",
            success: false,
            error
        });
    }
});

router.post('/change-instruktor-status', authMiddleware, async (req, res) => {
    try {
        const { instruktorId, status, userId } = req.body;
        const instruktor = await Instruktor.findOneAndUpdate(instruktorId, {
            status,
        });
        res.status(200).send({
            message: "Instruktor status updated successfully",
            success: true,
            data: instruktor
        });
        const user = await User.findOne({ _id: userId });
        const unseenNotifications = user.unseenNotifications;
        unseenNotifications.push({
            type: "new-instruktor-request-changed",
            message: `Your instruktor account has been ${status}`,
            onClickPath: ""
        })

        await User.findByIdAndUpdate(user._id, { unseenNotifications });

    }catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Error applying doctor account"
        })

    };)

module.exports = router;
