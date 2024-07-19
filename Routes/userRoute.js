const express = require('express');
const User = require("../Models/Users")

const router = express.Router();

const userRegistration = require("../controller/userController")

router.post('/users', userRegistration);


module.exports = router;