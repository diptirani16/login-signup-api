const jwt = require("jsonwebtoken");

const {sign: jwtSign, verify: jwtVerify} = jwt;

const JWT_SECRET = process.env.JWT_SECRET;

function sign(user) {
    return new Promise((resolve, reject) => {
        jwtSign({
            email: user.email,
            _id: user._id
        }, JWT_SECRET, {
            issuer: 'Authentication',
            audience: 'Frontend',
            subject: 'authentication',
            expiresIn: '2h',
            notBefore: '-5s'
        }, (err, encoded) => {
            if(err) reject(err)
            else resolve(encoded)
        })
    })
}

function verify(token) {
    return new Promise((resolve, reject) => {
        jwtVerify(token, JWT_SECRET, {
            issuer: 'Authentication',
            audience: 'Frontend',
            subject: 'authentication',
            expiresIn: '2h',
            notBefore: '-5s'
        }, (err, encoded) => {
            if(err) reject(err)
            else resolve(encoded)
        })
    })
}

module.exports = {sign, verify};