const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Instruktor = require('../models/instruktorModel')

router.post("/get-instruktor-info-by-user-id" ,authMiddleware, async(req, res)=>{
    try{
        const instruktor = await Instruktor.findOne({_id: req.body.userId});
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

module.exports=router;