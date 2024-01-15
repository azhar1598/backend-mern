// controllers/auth.js

const User = require('../models/user');


const registerUser = async (req, res) => {


    console.log('register user response', req.body)

    // Registration logic
    try {
        const { firstName, lastName, userName, password } = req.body;
        const user = new User({ firstName, lastName, userName, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            data: req.body,
            message: 'Error registering user'
        });
    }
};


const loginUser = async (req, res) => {
    // Login logic
};


module.exports = { registerUser, loginUser };