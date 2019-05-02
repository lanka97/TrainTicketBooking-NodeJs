const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require('bcrypt');

User.addUser  = function ( req, res ){
    console.log(req.body.fName);
    let passwordString = '123456';
    bcrypt.hash(req.body.password, 10, function(err, hash) {        
    
    const userobj = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        password: hash,
        email: req.body.email,
        NIC: req.body.NIC,
        govEmp: req.body.govEmp,
        phone: req.body.phone
    });
    User.findOne({
        email: req.body.email
    }).then(user => {  
            if(!user){
                console.log(userobj);
                userobj.save().then(Response => {
                    res.status(200).json({
                        message : "User Registerd"
                    });
                }).catch( err => {
                    res.status(500).json({ message:err });
                })
            }else{
                res.status(200).json({
                    message : "Email Already exist"
                });
            }
    }).catch( err => {
        res.status(500).json({ err });
    });

});
}

User.signIn = function signIn(req,res){

    User.findOne({
        email:req.body.email
    })
        .then(user=>{
            if(user){
                if(bcrypt.compareSync(req.body.password,user.password)){
                    res.status(200).json({success:true,user});
                }else{
                    res.status(200).json({success:false,error:"Invalid passowrd or username"});
                }
            }else{
                res.status(404).send();
            }
        })
        .catch(err=>{
            res.send(err);
        })
}

module.exports = User;
