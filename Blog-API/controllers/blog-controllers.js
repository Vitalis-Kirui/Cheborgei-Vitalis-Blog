const Blog = require('../models/blog-model')

// Creating a new blog
const createBlog = (req, res) => { 
    let blogData = req.body;

    let blog = new Blog(blogData);

    blog.save((error, savedBlog) => { 
        if (error) {
            console.error(error);
        }
        else {
            res.json({ status: 200, message: 'Blog created successfully', blog: savedBlog });
        }
    });
};

module.exports = {
    createBlog,
}