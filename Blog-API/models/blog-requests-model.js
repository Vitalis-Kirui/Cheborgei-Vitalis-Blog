const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogRequestSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
    ownerId: {
        type: String,
        required: true
    },
    ownernames: {
        type: String,
        required: true
    }
},
    {timestamps: true}
);

module.exports = mongoose.model('Blog-request', blogRequestSchema, 'blog-requests');