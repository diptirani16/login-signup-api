const router = require('express').Router()

const Users = require('../controllers/users');

router.post("/signup", Users.signup);
router.post("/login", Users.login);

module.exports = router;