const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// message schema
const messageSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    {timestamps : true}
);

module.exports = ('Message', messageSchema, 'messages');