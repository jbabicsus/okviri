const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Instruktor = require('../models/instruktorModel')

router.post("/get-instruktor-info-by-user-id" ,authMiddleware, async(req, res)=>{
    try{
        const instruktor = await Instruktor.findOne({userId: req.body.userId});
        res.status(200).send({
            success: true,
            message: "Instruktor info fetched successfully",
            data: instruktor
        });
        }
    catch(error){
        res.status(500)
        .send({message: "Error getting instruktor info", success:false, error});
    }
});

module.exports=router;