const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
const config = require('../config/config-variables');
const bcrypt = require('bcryptjs');

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

            // Saving the user
            user.save((error, savedUser) => { 
                if (error) { 
                    console.log(error);
                }
                else {
                    res.json({ status: 200, message: 'User successfully registered.' });
                }
            });
            
            // Hasing user passwords
            // bcrypt.genSalt(10, (error, salt) => { 
            //     bcrypt.hash(user.password, salt, (error, hash) => { 

            //         if (error) {
            //             console.log(error)
            //         }
            //         else {
            //             user.password = hash;
            //             user.confirmpassword = hash;
                        
            //             // Saving the user
            //             user.save((error, savedUser) => { 
            //                 if (error) { 
            //                     console.log(error);
            //                 }
            //                 else {
            //                     res.json({status: 200, message:'User successfully registered.'});
            //                 }
            //             });

            //         }

            //     })
            // })

        }
     })

};

// login user
const loginUser = (req, res) => {
    let userDetails = req.body;

    let userUsername = userDetails.username;
    
    User.findOne({ username: userUsername }, (error, user) => {
        if (error) {
            console.log(error);
        }
        if (!user) {
            res.json({status: 404, message:'User not found.'});
        }
        else {
            let enteredPassword = userDetails.password;

            if (enteredPassword !==user.password ) { 
                res.json({status:401, message:'Wrong password.'});
            }
            else {
                // Genrating token
                let payload = { subject: user._id }
                let token = jwt.sign(payload, config.secrectKey)

                res.json({message:"Login successful", token: token, userID:user._id})
            }
        }
    })

};

// User profile
const userProfile = (req, res) => { 

    // Checking if req if from logged in user
    if (!req.headers.authorization) {
        res.json({status: 401, message:"Unauthorized request"});
    }

    // Extracting token
    let token = req.headers.authorization.split(' ')[1];

    // Checking if token is of null value
    if (token === "null") {
        res.json({status: 401, message:"Unauthorized request"});
    };
    
    // verifying the token
    let payload = jwt.verify(token, config.secrectKey);

    // If there is no payload
    if (!payload) { 
        res.json({status: 401, message:"Unauthorized request"});
    }

    else {
        let userId = payload.subject;

        // finding user by id
        User.findById(userId, (error, user) => {
            if (error) {
                console.log(error);
            }
            else {
                
                // sending back user details
                res.json({
                    status: 200,
                    user: {
                        firstname: user.firstname,
                        lastname: user.lastname,
                        username: user.username,
                        bio: user.bio,
                        email: user.email,
                        profileimage: user.profileimage,
                        subscription : user.subscribe,
                    }
                });
            }
        })
    }

};

// Updating user profile
const updateUserProfile = (req, res) => { 

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

        // New details
        let newDetails = req.body;

        User.findByIdAndUpdate(userId, newDetails)
            .then((updatedUser) => { 
                // sending back user details
                res.json({
                    status: 200,
                    user: {
                        firstname: updatedUser.firstname,
                        lastname: updatedUser.lastname,
                        username: updatedUser.username,
                        bio: updatedUser.bio,
                        email: updatedUser.email,
                        profileimage: updatedUser.profileimage,
                        subscription : updatedUser.subscribe,
                    }
                });
            })
            .catch((error) => {
            console.log(error);
        })
    }

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

// new users created in the last 72 hours
const newUsers = (req, res) => {
    User.find({ createdAt: { $lt: new Date(), $gt: new Date(new Date().getTime() - (72 * 60 * 60 * 1000)) } })
        .sort({ createdAt: -1 })
        .then(users => {
            res.json({ users: users })
        })
        .catch(error => {
            console.log(error);
        });
}

module.exports = {
    createUser,
    loginUser,
    getUsers,
    getSingleUser,
    userProfile,
    updateUserProfile,
    newUsers
}