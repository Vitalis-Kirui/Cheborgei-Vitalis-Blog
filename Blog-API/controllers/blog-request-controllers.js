const BlogRequest = require('../models/blog-requests-model')
const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
const config = require('../config/config-variables');

// Creating a new blog request
const createBlogRequest = (req, res) => { 

    // Checking if req if from logged in user
    if (!req.headers.authorization) {
        res.json({status: 401, message:"Unauthorized request"});
    }

    // Extracting token
    let token = req.headers.authorization.split(" ")[1];

    // Checking if token is of null value
    if (token == null) {
        res.json({status: 401, message:"Unauthorized request"});
    };
    
    // verifying the token
    let payload = jwt.verify(token, config.secrectKey);

    // If there is no payload
    if (!payload) {
        res.json({ status: 401, message: "Unauthorized request" });
    }

    else {
        let userId = payload.subject;

        User.findById(userId)
            .then((user) => {

                const requestData = {
                    title: req.body.title,
                    category: req.body.category,
                    blog: req.body.blog,
                    status: 'Under review',
                    ownerId: userId,
                    ownernames:user.firstname +' ' + user.lastname,
                };

                const newRequest = new BlogRequest(requestData);

                newRequest.save((error, savedBlogRequest) => { 
                    if (error) {
                        console.log(error);
                    }
                    else {
                        res.json({ok: true, status: 200, requests: savedBlogRequest})
                    }
                });
            })
            .catch((error) => { 
                console.log(error);
            })

    }

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

// Fetching a single user blog requests
const profileBlogRequests = (req, res) => { 
    // Checking if req if from logged in user
    if (!req.headers.authorization) {
        res.json({status: 401, message:"Unauthorized request"});
    }

    // Extracting token
    let token = req.headers.authorization.split(" ")[1];

    // Checking if token is of null value
    if (token == null) {
        res.json({status: 401, message:"Unauthorized request"});
    };
    
    // verifying the token
    let payload = jwt.verify(token, config.secrectKey);

    // If there is no payload
    if (!payload) {
        res.json({ status: 401, message: "Unauthorized request" });
    }

    else {
        let owner = payload.subject;

        BlogRequest.find({ ownerId: owner }).sort({ createdAt: -1 })
            .then((userRequests) => {
                res.json({userRequests: userRequests})
            })
            .catch((error) => { 
                console.log(error);
            });

    }
};

module.exports = {
    createBlogRequest,
    getBlogRequests,
    getSingleBlogRequest,
    deleteBlogRequests,
    todayBlogRequest,
    profileBlogRequests
}