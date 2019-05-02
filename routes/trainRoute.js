const express = require("express");
const router = express.Router();
const train = require("../models/trainModel");
const trainService = require("../controller/trainController");

router.get('/', ( req, res) => {
    trainService.getTrains( req, res );
});

module.exports = router;