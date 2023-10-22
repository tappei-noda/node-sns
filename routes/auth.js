const User = require("../models/User");
const router  = require("express").Router();
router.post("/register",async (req,res) =>{
    try{
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email
        })
        user = await newUser.save();
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json(err);
    }
} );
module.exports = router;