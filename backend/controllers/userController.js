const express = require("express");
const User = require("../models/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

const getData = (req,res)=> {
    res.send("API")
}

const postSignup = async (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
            res.status(500).json({ message: err })
        }

        const newUser = new User({
            name,
            email,
            password: hash
        })

        try {
            await newUser.save();
            res.status(200).json({message: "Signup SuccessFul"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    });
}

const loginpost = async (req,res) => {
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        res.status(400).json({message: "Invalid credentials"})
    }

    const hash = user.password;

    bcrypt.compare(password, hash, function(err, result) {
       if(err){
        res.status(500).send(err)
       }

       if(result){
        var token = jwt.sign({ userID: user._id }, 'shhhhh');
        res.status(200).json({message: "Login successful" , token: token, userID: user._id})
       }
       else{
        res.status(500).json({message: "Invalid credentials"})
       }

    });
}

module.exports = {postSignup,getData , loginpost}