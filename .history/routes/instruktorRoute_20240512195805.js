const express = require('express');
const router = express.Router();
const Instruktor = require("../models/instruktorModel");
const bcrypt = require("bcryptjs");
router.post('/registracija' , async(req,res)=>{
    try{
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password,salt);

    }catch(error){

    }
})

router.post('/login' , async(req,res)=>{
    try{
        

    }catch(error){

    }
})

module.exports = router;