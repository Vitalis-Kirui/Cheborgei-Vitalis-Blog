const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blog-controllers');

// create blog route
router.post('/create-blog', blogControllers.createBlog);

// get all blog route
router.get('/all-blogs', blogControllers.getBlogs);

// get a single blog route
router.get('/single-blog', blogControllers.getSingleBlog);

module.exports = router;