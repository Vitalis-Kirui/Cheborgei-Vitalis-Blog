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

            res.json({message : 'success'});
        }

    })
};

// Getting all the messages
const getMessages = (req, res) => { 

    Message.find((error, messages) => { 
        if (error) { 
            console.log(error);
        }
        else {

            let messageCount = messages.length;

            res.json({total : messageCount, messages: messages });            
        }
    });
};

// Getting a single message
const getSingleMessage = (req, res) => { 
    const id = req.params.id;

    Message.findById(id, (error, message) => { 
        if (error) {
            console.log(error);
        }
        else { 
            res.json({ message: message });
        };
    });
};

// Deleting a single message
const deleteMessage = (req, res) => { 
    const id = req.params.id;

    Message.findByIdAndDelete(id, (error, message) => { 

        if (error) { 
            console.log(error);
        }
        else {
            res.json({ message: 'Message deleted successfully' });
        }
    });
};

module.exports = {
    createMessage,
    getMessages,
    getSingleMessage,
    deleteMessage
};