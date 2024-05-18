const express = require('express');
const router = express.Router();
const Instruktor = require("../models/instruktorModel");
const bcrypt = require("bcryptjs");
const jwt = require("bcryptjs");

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
    }catch(error){

    }
})

module.exports = router;