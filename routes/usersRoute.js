const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController.js');

router.use(express.json())


router.get('/users',UserController.getUserDetails);
router.post('/signup',UserController.registerUser);
router.post('/login',UserController.loginAdmin);

module.exports = router;