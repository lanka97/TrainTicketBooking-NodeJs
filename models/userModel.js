const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user =  new Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:false
    },
    govEmp:{
        type:Boolean,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User',user);