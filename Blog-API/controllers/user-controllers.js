const User = require('../models/user-model');

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

module.exports = {
    createUser,
}