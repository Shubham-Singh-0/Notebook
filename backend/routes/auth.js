const express = require('express');
const router = express.Router();
const User = require('../models/User');



//Create a user using  : POST "/api/auth"  , Doen't require auth

router.post('/' , (req, res) =>{
       
       const user = User(req.body);
       user.save()
       res.send("hello")


})

module.exports= router;
