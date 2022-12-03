const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blogimage: {
        type: String,
    },
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    description: {
        type: String,
        required: true
    }
},
    {timestamps: true}
);

module.exports = mongoose.model('Blog', blogSchema, 'blogs');