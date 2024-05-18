const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middlewares/authMiddleware');
const Instruktor = require('../models/instruktorModel');

router.post('/registracija', async (req, res) => {
    try {
        const instruktorExists = await User.findOne({ email: req.body.email });
        if (instruktorExists) {
            return res.status(409).send({ message: "Račun već postoji", success: false });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newInstruktor = new User({ ...req.body, password: hashedPassword });
        await newInstruktor.save();

        res.status(201).send({ message: "Uspješna registracija", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating user", success: false, error });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({ message: "Korisnički račun ne postoji", success: false });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: "Lozinka nije ispravna", success: false });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
        res.status(200).send({ message: "Login successful", success: true, data: token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Greška kod prijave", success: false, error });
    }
});

router.post("/get-user-info-by-id", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.body.userId).select('-password');
        if (!user) {
            return res.status(404).send({ message: "Korisnički račun ne postoji", success: false });
        }
        res.status(200).send({ success: true, data: user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Greška u dohvaćanju korisničkih podataka", success: false, error });
    }
});

router.post('/apply-instruktor-account', authMiddleware, async (req, res) => {
    try {
        const newInstruktor = new Instruktor({ ...req.body, status: "pending" });
        await newInstruktor.save();

        const adminUser = await User.findOne({ isAdmin: true });
        if (adminUser) {
            adminUser.unseenNotifications.push({
                type: "new-instruktor-request",
                message: `${newInstruktor.firstName} ${newInstruktor.lastName} has applied for a instruktor account`,
                data: {
                    instruktorId: newInstruktor._id,
                    name: `${newInstruktor.firstName} ${newInstruktor.lastName}`
                },
                onClickPath: "/admin/instruktorlist"
            });
            await adminUser.save();
        }

        res.status(200).send({ success: true, message: "Instructor applied successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error applying instructor account", success: false, error });
    }
});

router.post('/mark-all-notifications-as-seen', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(404).send({ success: false, message: 'User not found' });
        }

        user.seenNotifications.push(...user.unseenNotifications);
        user.unseenNotifications = [];
        const updatedUser = await user.save();

        res.status(200).send({
            success: true,
            message: "All notifications marked as seen",
            data: updatedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error marking notifications as seen", success: false, error });
    }
});

router.post('/delete-all-notifications', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(404).send({ success: false, message: 'User not found' });
        }

        user.unseenNotifications = [];
        user.seenNotifications = [];
        await user.save();

        res.status(200).send({
            success: true,
            message: 'All notifications deleted',
            data: user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error deleting notifications", success: false, error });
    }
});

module.exports = router;
