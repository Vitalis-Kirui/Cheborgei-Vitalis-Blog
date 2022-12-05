const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blog-controllers');

// create blog route
router.post('/create-blog', blogControllers.createBlog);

// get all blog route
router.get('/all-blogs', blogControllers.getBlogs);

// Getting new blogs
router.get('/new-blogs', blogControllers.newBlogs);

//Getting active blog routes
router.get('/active-blogs', blogControllers.activeBlogs);

// Getting inactive blog routes
router.get('/inactive-blogs', blogControllers.dormantBlogs);

// get a single blog route
router.get('/blog/:id', blogControllers.getSingleBlog);

// Updating a single blog route
router.put('/update-blog/:id', blogControllers.updateSingleBlog);

// Delete a single blog route
router.delete('/blog/:id', blogControllers.deleteBlog);

module.exports = router;