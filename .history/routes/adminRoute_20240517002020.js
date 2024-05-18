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
        console.error("Error fetching instruktor data:", error);
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
        console.error("Error fetching user data:", error);
        res.status(500).send({
            message: "Error fetching user data",
            success: false,
            error
        });
    }
});

router.post('/change-instruktor-account-status', authMiddleware, async (req, res) => {
    try {
        const { instruktorId, status } = req.body;
        
        // Pronađite i ažurirajte instruktorov status
        const instruktor = await Instruktor.findByIdAndUpdate(instruktorId, { status }, { new: true });
        
        if (!instruktor) {
            return res.status(404).send({
                message: "Instruktor not found",
                success: false,
            });
        }

        // Pronađite korisnika povezanog s instruktorom
        const user = await User.findById(instruktor.userId);
        if (user) {
            const unseenNotifications = user.unseenNotifications;
            unseenNotifications.push({
                type: "new-instruktor-request-changed",
                message: `Your instruktor account has been ${status}`,
                onClickPath: "/notifications"
            });

            await user.save(); // Spremajte korisnika s novim obavijestima

            res.status(200).send({
                message: "Instruktor status has been changed",
                success: true,
                data: instruktor,
            });
        } else {
            res.status(404).send({
                message: "User not found",
                success: false,
            });
        }
    } catch (error) {
        console.error("Error changing instruktor status:", error);
        res.status(500).send({
            message: "Error changing instruktor status",
            success: false,
            error
        });
    }
});

module.exports = router;