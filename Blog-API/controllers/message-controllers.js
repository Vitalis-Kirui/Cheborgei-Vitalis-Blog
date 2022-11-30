const Message = require('../models/message-model');

// Create a new message

const createMessage = (req, res) => {
    let messageData = req.body;

    let message = new Message(messageData);

    message.save((error, savedMessage) => {

        if (error) { 
            console.log(error);
        }
        else {
            let messageCount = savedMessage.length;

            res.json({message : 'success', total: messageCount, messages : savedMessage});
        }

    })
};

// Getting all the messages

// Getting a single message

// Deleting a single message

module.exports = {
    createMessage,
};