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

    BlogRequest.find((error, blogRequests) => {
        if (error) {
            console.log(error);
        }
        else {
            let totalRequests = blogRequests.length;

            res,json({ok: true, status: 200, requests: blogRequests, total:totalRequests});
        }
     });
 };

module.exports = {
    createBlogRequest,
    getBlogRequests,
}