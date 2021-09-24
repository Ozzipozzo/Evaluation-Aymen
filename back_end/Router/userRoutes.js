const express = require('express');
const router = express.Router();
const user = require('../models/UserModel');
const userController = require('../controllers/userController');

router.post('/login', userController.userLogin);
router.post('/register', userController.userRegister);

module.exports = router;