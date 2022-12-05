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

// Getting all the blogs
const getBlogs = (req, res) => { 

    // Blog.find((error, blogs) => {
    //     if (error) {
    //         console.error(error);
    //     }
    //     else {
    //         res.json({ status: 200, message: 'success', blogs: blogs });
    //     }
    // })

    // Getting blogs and sorting them in descending order
    Blog.find({}).sort({ createdAt: -1 }).then(blogs => {
        res.json({status: 200, message: 'success', blogs: blogs})
    },
        error => {
            console.log(error);
         }
    )

};

// Getting a single blog
const getSingleBlog = (req, res) => {

    let blogId = req.params.id;

    Blog.findById(blogId, (error, blog) => { 

        if (error) { 
            console.error(error);
        }
        else {
            res.json({ status: 200, message: 'success', blog: blog });
        }
    });

};
 
// Deleting a blog
const deleteBlog = (req, res) => { 
    let blogId = req.params.id;

    Blog.findByIdAndDelete(blogId, (error, deleteMessage) => { 
        if (error) {
            console.error(error);
        }
        else {
            res.json({ status: 200, message: 'Message deleted successfully' });
        }
    })
};

module.exports = {
    createBlog,
    getBlogs,
    getSingleBlog,
    deleteBlog
}