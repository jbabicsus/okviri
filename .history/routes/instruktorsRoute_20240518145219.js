const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Instruktor = require('../models/instruktorModel');

router.post("/get-instruktor-info-by-user-id", authMiddleware, async (req, res) => {
  try {
    const instruktor = await Instruktor.findById({ userId: req.body.userId });
    if (!instruktor) {
      return res.status(404).send({
        success: false,
        message: "Instruktor not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Instruktor info fetched successfully",
      data: instruktor,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error getting instruktor info",
      error,
    });
  }
});

module.exports = router;
