const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config-variables');
const userRoutes = require('./routes/user-routes');
const blogRoutes = require('./routes/blog-routes');
const messagesRoutes = require('./routes/message-routes');

// Initializing app
const app = express();

// Using cors
app.use(cors());

// Using body-parser
app.use(bodyParser.json());

mongoose.connect(config.dbConnectionString)
    .then((success) => {
        app.listen(3000);
        console.log("Database connection established")
    })
    .catch((error) => { 
        console.log(error);
    });

    // Using user routes
app.use('/users', userRoutes);
    
// Using blog routes
app.use('/blogs', blogRoutes);

// Using messages routes
app.use('/messages', messagesRoutes);