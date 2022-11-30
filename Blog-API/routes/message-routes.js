const express = require('express');
const router = express.Router();
const messagesControllers = require('../controllers/message-controllers');

// Create a message
router.post('/create-message', messagesControllers.createMessage);

// Get all the messages
router.get('/all-messages', messagesControllers.getMessages);

// Getting a single message
router.get('/message/:id', messagesControllers.getSingleMessage);

// Deleting a message
router.delete('/message/:id', messagesControllers.deleteMessage);

module.exports = router;