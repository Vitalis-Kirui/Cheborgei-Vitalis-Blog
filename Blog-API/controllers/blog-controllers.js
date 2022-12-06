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

    // Getting blogs and sorting them in descending order
    Blog.find({}).sort({ createdAt: -1 })
        .then((blogs) => {
            res.json({ status: 200, message: 'success', blogs: blogs })
        })
        .catch((error) => { 
            console.log(error);
        })

};

// Getting active blogs and sorting them in descending order
const activeBlogs = (req, res) => {

    Blog.find({ status: 'active' }).sort({ createdAt: -1 })
        .then((activeblogs) => {

        let totalActiveBlogs = activeBlogs.length;

        res, json({ status: 200, message: 'success',total : totalActiveBlogs,  activeBlogs: activeblogs });
        })
        .catch((error) => {
        console.log(error);
    })
};
 
// Getting dormant blogs and sorting them in descending order
const dormantBlogs = (req, res) => {

    Blog.find({ status: 'inactive' }).sort({ createdAt: -1 })
        .then((inactiveBlogs) => {

        let totalInactiveBlogs = inactiveBlogs.length;

        res, json({ status: 200, message: 'success',total : totalInactiveBlogs, inactiveBlogs : inactiveBlogs });
        })
        .catch((error) => {
            console.log(error);
         })
 };

// Getting new blogs based on specific period of time
const newBlogs = (req, res) => { 
    Blog.find({ createdAt: { $lt: new Date(), $gt: new Date(new Date().getTime() - (72 * 60 * 60 * 1000)) } }).sort({
        createdAt :-1
    })
        .then(blogs => {
        let newTotalBlogs = blogs.length;

            res.json({total : newTotalBlogs, blogs : blogs});
        })
        .catch((error) => { 
            console.log(error);
        })
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

// Updating a single blog
const updateSingleBlog = (req, res) => { 
    const blogId = req.params.id;

    let updateDetails = req.body;

    Blog.findByIdAndUpdate(blogId, updateDetails, (error, updatedBlog) => { 
        if (error) {
            console.log(error);
        }
        else {
            res.json({message: 'success', blog: updatedBlog})
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
    deleteBlog,
    newBlogs,
    updateSingleBlog,
    activeBlogs,
    dormantBlogs
}