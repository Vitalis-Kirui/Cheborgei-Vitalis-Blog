const User = require('../models/user-model');

const createUser = (req, res) => { 
    let userDetails = req.body;

    let user = new User(userDetails);

    user.save((error, savedUser) => { 
        if (error) { 
            console.log(error);
        }
        else {
            res.json({status: 200, message:'Success', data: savedUser})
        }
    });
};

module.exports = {
    createUser,
}