const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController.js');

router.use(express.json())


router.get('/users',UserController.getUserDetails);
router.post('/register-user',UserController.registerUser);

module.exports = router;