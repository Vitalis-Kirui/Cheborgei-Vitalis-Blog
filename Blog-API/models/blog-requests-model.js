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
    }
});

module.exports = mongoose.model('Blog-request', blogRequestSchema, 'blog-requests');