const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticket = new Schema({
    trainName:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    mainPassenger:{
        type:Array,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Ticket', ticket );