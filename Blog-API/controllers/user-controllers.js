const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
const config = require('../config/config-variables');

// Create a new User object
const createUser = (req, res) => { 
    let userDetails = req.body;

    let userUsername = userDetails.username;

    User.findOne({ username: userUsername }, (error, user) => {
        if (error) {
            console.error(error);
        }
        if (user) {
            res.json({status: 209, message:"Username already in use"})            
        }
        else {
             let user = new User(userDetails);

            user.save((error, savedUser) => { 
                if (error) { 
                    console.log(error);
                }
                else {
                    res.json({status: 200, message:'User successfully registered.'});
                }
            });
        }
     })

};

// login user
const loginUser = (req, res) => {
    let userDetails = req.body;

    let userUsename = userDetails.username;
    
    User.findOne({ username: userUsename }, (error, user) => {
        if (error) {
            console.log(error);
        }
        if (!user) {
            res.json({status: 404, message:'User not found.'});
        }
        if (user) {
            let enteredPassword = req.body.password;

            if (enteredPassword !== user.password) { 
                res.json({status:401, message:'Wrong password.'});
            }
            else {
                // Genrating token
                let payload = { subject: user._id }
                let token = jwt.sign(payload, config.secrectKey)

                res.json({message:"Login successful", token: token})
            }
        }
    })

};
 
// getting all users
const getUsers = (req, res) => { 

    // Finding and sorting users per username
    User.find().sort({ username: 1 })
        .then((users) => {
            res.json({ status: 200, message: 'Success', users: users });
        
        })
        .catch((error) => { 
            console.log(error);
        });

};

// Getting a single user
const getSingleUser = (req, res) => { 
    let id = req.params.id;

    User.findById(id, (error, user) => { 
        if (error) {
            console.log(error);
        }
        else {
            res.json({status: 200, message:'success', user: user});
        }
    });
};

module.exports = {
    createUser,
    loginUser,
    getUsers,
    getSingleUser
}