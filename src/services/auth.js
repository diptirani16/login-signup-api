const { scrypt, randomBytes, timingSafeEqual } = require('crypto');

function hashPassword(password) {
    return new Promise((resolve, reject) => {
        const salt = randomBytes(32).toString('hex');
        scrypt(password, salt, 32, (err, derivedKey) => {
            if(err) reject(err)
            else resolve(`${derivedKey.toString('hex')}:${salt}`)
        })
    })
}

function verifyPassword(hashedPassword, password) {
    return new Promise((resolve, reject) => {
        const [hash, salt] = hashedPassword.split(':');
        scrypt(password, salt, 32, (err, derivedKey) => {
            if(err) reject(err)
            else resolve(timingSafeEqual(Buffer.from(hash, 'hex'), derivedKey))
        })
    })
}

module.exports = { hashPassword, verifyPassword };