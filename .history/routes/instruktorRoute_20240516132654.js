const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const autMiddleware = require("../middlewares/authMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');
const Instruktor = require('../models/instruktorModel');

router.post('/registracija' , async(req,res)=>{
    try{

        const instruktorExists = await User.findOne({email: req.body.email});
        if(instruktorExists){
            return res.status(200).send({message: "Račun već postoji", success:false});
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password,salt);
        req.body.password = hashedPassword;

        const newInstruktor = new User(req.body);

        await newInstruktor.save();
        res.status(200).send({message: "Uspješna registracija", success: true});

    }catch(error){
        console.log(error);
        res.status(500)
        .send({message: "Error creating user", success: false, error});
    }
});

router.post('/login' , async(req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res
            .status(200)
            .send({message: "Korisnički račun ne postoji", success: false});
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch){
            return res
            .status(200)
            .send({message: "Lozinka nije ispravna", success:false});
        }else{
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
                expiresIn:"30d"
            })
            res.status(200)
            .send({message: "Login successful", success: true, data:token});
        }
    }catch(error){
        console.log(error)
        res.status(500)
        .send({message: "Greška kod prijave", success:false, error});
    }
});


router.post("/get-user-info-by-id" ,authMiddleware, async(req, res)=>{
    try{
        const user = await User.findOne({_id: req.body.userId});
        user.password = undefined;
        if( !user){
            return res
            .status(200)
            .send({message: "Korisnički račun ne postoji", success: false});
        }else{
            res.status(200).send({ success:true , data: user})
        }
    }catch(error){
        res.status(500)
        .send({message: "Greška u dohvaćanju korisničkih podataka", success:false, error});
    }
});



router.post('/apply-instruktor-account' , authMiddleware, async(req,res)=>{
    try{

        const newInstruktor= new Instruktor({...req.body, status:"pending"});
        await newInstruktor.save();
        const adminUser = await User.findOne({ isAdmin: true});

        const unseenNotifications = adminUser.unseenNotifications;
        unseenNotifications.push({
            type: "new-instruktor-request",
            message: `${newInstruktor.firstName} ${newInstruktor.lastName} has applied for a instruktor account`,
            data :{
                instruktorId : newInstruktor._id,
                name : newInstruktor.firstName + " " + newInstruktor.lastName
            },
            onClickPath : "/admin/instruktori"
        })

        await User.findByIdAndUpdate(adminUser._id, {unseenNotifications});
        res.status(200).send({
            success: true,
            message: "Instructor applied successfully"
        });

    }catch(error){
        console.log(error);
        res.status(500)
        .send({message: "Error applying instructor account", success: false, error});
    }
});


router.post('/mark-all-notifications-as-seen' , authMiddleware, async(req,res)=>{
    try{


    }catch(error){
        console.log(error);
        res.status(500)
        .send({message: "Error applying instructor account", success: false, error});
    }
});

module.exports = router;