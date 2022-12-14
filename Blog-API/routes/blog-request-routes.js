const express = require('express');
const router = express.Router();
const BlogRequestControllers = require('../controllers/blog-request-controllers');

// Create a new blog request
router.post('/create-request', BlogRequestControllers.createBlogRequest);

// Get all blog requests
router.get('/all-requests', BlogRequestControllers.getBlogRequests);

// Getting today's blogs
router.get('/today-requests', BlogRequestControllers.todayBlogRequest);

// Get a single blog route
router.get('/blog-request/:id', BlogRequestControllers.getSingleBlogRequest);

// Getting logged in user blog requests route
router.get('/user-requests', BlogRequestControllers.profileBlogRequests);

// Delete a blog route
router.delete('/blog-request/:id', BlogRequestControllers.deleteBlogRequests);

module.exports = router;