const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blog: {
        type: String,
        required: true
    }
},
    {timestamps: true}
);

module.exports = mongoose.model('Blog', blogSchema, 'blogs');