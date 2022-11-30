const monggose = require('mongoose');

const Schema = monggose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    subscribe: {
        type: Boolean,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    profileimage: {
        type: String
    },
    bio: {
        type: String
    }
},
    {timestamps: true}
);

module.exports = monggose.model('User', userSchema, 'users');