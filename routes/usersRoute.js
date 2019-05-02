const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const userService = require("../controller/userController");

router.get('/',(req,res,next) => {
    res.status(200).json({
        message : "get"
    });
}); 

router.get('/id/:id',(req,res,next) => {
    User.findById(req.param.id).exec()
    .then( result=>{
            console.log(result);
            res.status(200).json({result});
        }).catch( err => {
        console.log(err);
        });
}
);

router.get('/login',(req,res) => {
    userService.signIn(req,res);
}
);

router.post('/',( req,res ) => { userService.addUser(req,res) });
    // const user = new User({
    //     fName: 'abc',
    //     lName: 'abc',
    //     password:'ac',
    //     email:'acvc',
    //     NIC:'acb',
    //     govEmp:true,
    //     phone:'0775698445'});
    
    // user.save().then( res=>{
    //     console.log(res);
    // }
    // ).catch(err=>{
    //     console.log(err);
    // })
    // res.status(201).json({
    //     message : "post"
    // });

//     userService.addUser(req.res);
// })

module.exports = router;