const express = require('express');
const router = express.Router();
const Instruktor = require("../models/instruktorModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const autMiddleware = require("../middlewares/authMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/registracija' , async(req,res)=>{
    try{

        const instruktorExists = await Instruktor.findOne({email: req.body.email});
        if(instruktorExists){
            return res.status(200).send({message: "Račun već postoji", success:false});
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password,salt);
        req.body.password = hashedPassword;

        const newinstruktor = new Instruktor(req.body);

        await newinstruktor.save();
        res.status(200).send({message: "Uspješna registracija", success: true});

    }catch(error){
        console.log(error);
        res.status(500)
        .send({message: "Error creating user", success: false, error});
    }
});

router.post('/login' , async(req,res)=>{
    try{
        const instruktor = await Instruktor.findOne({email: req.body.email});
        if(!instruktor){
            return res
            .status(200)
            .send({message: "Korisnički račun ne postoji", success: false});
        }

        const isMatch = await bcrypt.compare(req.body.password, instruktor.password);
        if(!isMatch){
            return res
            .status(200)
            .send({message: "Lozinka nije ispravna", success:false});
        }else{
            const token = jwt.sign({id: instruktor._id}, process.env.JWT_SECRET, {
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


router.post('get-user-info-by-id' ,authMiddleware, async(req, res)=>{
    try{
        const user = await User.findOne({id: req.body.userId});
        if( !user){
            return res
            .status(200)
            .send({message: "Korisnički račun ne postoji", success: false});
        }else{
            res.status(200).send({ success:true , data: {name: user.name, email: user.email}})
        }
    }catch(error){
        res.status(500)
        .send({message: "Greška u dohvaćanju korisničkih podataka", success:false, error});
    }
})

module.exports = router;