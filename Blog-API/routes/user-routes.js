const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user-controllers');

// create user route
router.post('/create-user', userControllers.createUser);

module.exports = router;