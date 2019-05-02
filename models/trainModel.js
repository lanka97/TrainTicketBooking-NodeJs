const mongoose = require('mongoose');
const schema = mongoose.Schema;

const trains = new schema({
    trainName:{
        type:String,
        required:true
    },
    time:{
        type:Array,
        required:true
    },
    departure:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        required:true
    },
    stations:{
        type:String,
        required:true
    },
    price:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model('Trains', trains)