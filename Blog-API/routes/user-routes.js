const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user-controllers');

// create user route
router.post('/create-user', userControllers.createUser);

// Login route
router.get('/login', userControllers.loginUser);

// Getting all users route
router.get('/all-users', userControllers.getUsers);

// User profile route
router.get('/user-profile', userControllers.userProfile);

// Getting a single user route
router.get('/user/:id', userControllers.getSingleUser);

module.exports = router;