const mongoose = require('mongoose');
const User = require('../models/users');

const { hashPassword, verifyPassword } = require('../services/auth');

const jsonwebtoken = require('jsonwebtoken');

module.exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) return res.status(400).send({success: false, message: "All the fields are mandatory!!"});
        const hash = hashPassword(password);
        await User.create({
            email,
            password: hash
        })
        return res.status(201).send({success: true, message: 'User Registered!!'});
    } catch (error) {
        console.log(error);
        if(error.code == 11000) {
            return res.status(409).send({success: false, message: 'EmailId already in use!!'})
        }
        else {
            return res.status(500).send({success: false, message: 'Internal server error!!'})
        }
    }
}

module.exports.login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = User.findOne({ email })
        if(!user) return res.status(404).send({success: false, message: 'User not registered !!'})
        const isValid = verifyPassword(user.password, password);
        if(isValid) {
            return res.status(200).send({success: true, message: 'Login Successfull !!', result: { token, user: jsonwebtoken.decode(token) }})
        }
    } catch (error) {
        console.log(error)
        return res.status(401).send({ success: false, message: 'Internal server error' })
    }
}
