const BlogRequest = require('../models/blog-requests-model')

// Creating a new blog request
const createBlogRequest = (req, res) => { 

    const requestData = req.body;

    const newRequest = new BlogRequest(requestData);

    newRequest.save((error, savedBlogRequest) => { 
        if (error) {
            console.log(error);
        }
        else {
            res.json({ok: true, status: 200, requests: savedBlogRequest})
        }
    });

};

// Fetching blog requests
const getBlogRequests = (req, res) => {

    BlogRequest.find().sort({ createdAt: -1 }).then(blogRequests => {
        let totalRequests = blogRequests.length;

        res,json({ok: true, status: 200, requests: blogRequests, total:totalRequests});
    },
        error => {
            console.error(error);
        }
     );
};
 
// Getting a single blog request
const getSingleBlogRequest = (req, res) => { 

    const id = req.params.id;

    BlogRequest.findById(id, (error, blogRequest) => {
        if (error) {
            console.log(error);
        }
        else {
            res.json({ ok: true, status: 200, requests: blogRequest });
        }
    });

};

// Deleting a blog request
const deleteBlogRequests = (req, res) => {

    const id = req.params.id;

    BlogRequest.findByIdAndDelete(id, (error, blogRequest) => { 
        if (error) {
            console.log(error);
        }
        else {
            res.json({ ok: true, status: 200, message: 'Blog request deleted successfully' });
        }
    });
 };

module.exports = {
    createBlogRequest,
    getBlogRequests,
    getSingleBlogRequest,
    deleteBlogRequests
}