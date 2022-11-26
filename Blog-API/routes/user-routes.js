const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user-controllers');

// create user route
router.post('/create-user', userControllers.createUser);

// Login route
router.get('/login', userControllers.loginUser);

module.exports = router;