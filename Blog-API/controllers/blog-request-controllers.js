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

    BlogRequest.find().sort({ createdAt: -1 })
        .then((blogRequests) => {
        let totalRequests = blogRequests.length;

        res,json({ok: true, status: 200, requests: blogRequests, total:totalRequests});
        })
        .catch((error) => {
        console.log(error);
    })
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
 
//  Today's requests
const todayBlogRequest = (req, res) => { 

    BlogRequest.find({ createdAt: { $lt: new Date(), $gt: new Date(new Date().getTime() - (24 * 60 * 60 * 1000)) } }).sort({ createdAt: -1 })
        .then((todayBlogs) => {
            let totalDailyRequests = todayBlogs.length;

            res.json({ total: totalDailyRequests, blogRequests: todayBlogs })
        })
        .catch((error) => {
            console.log(error)
         })

};

module.exports = {
    createBlogRequest,
    getBlogRequests,
    getSingleBlogRequest,
    deleteBlogRequests,
    todayBlogRequest,
}