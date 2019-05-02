const Train = require("../models/trainModel");

Train.getTrains = function( req, res ){
    Train.find({}).then( trains => {
        res.status(200).json(trains);
    }).catch(err => {
        res.status(500).json({ massege : err})
    })
}

module.exports = Train;