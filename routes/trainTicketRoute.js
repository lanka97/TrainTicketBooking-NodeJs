const express = require("express");
const router = express.Router();
const ticketService = require("../controller/ticketController");

router.post('/', ( req, res) => {
    ticketService.purchaseTicket( req, res );
});

module.exports = router;