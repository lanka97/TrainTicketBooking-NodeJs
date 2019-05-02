const Ticket= require("../models/trainTicketModel");

Ticket.purchaseTicket = function( req, res ){
    const ticketObj = new Ticket({
        trainName: req.body.trainName,
        class: req.body.class,
        price: req.body.price,
        mainPassenger: req.body.mainPassenger,
        count: req.body.count,
        time: req.body.time,
        date: req.body.date,
    });

    ticketObj.save().then( result => {
        res.status(200).json({ message: "success" });
    }).catch(err => {
        res.status(500).json({ message: err });
    });
}

module.exports = Ticket;