// controllers/auth.js
const { generateAccessToken, generateRefreshToken } = require('../middlewares/auth');

const UserModel = require('../models/user');
const bcrypt = require('bcrypt');

// const getAllUsers = async () => {
//     try {
//         const users = await User.find();
//         return users
//     } catch (error) {
//         console.error(error);
//         // res.status(500).json({ message: 'Internal Server Error' });
//     }
// };


const registerUser = async (req, res) => {
    // Registration logic
    try {
        const { firstName, lastName, userName, password } = req.body;
        const user = new UserModel({ firstName, lastName, userName, password });
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
    const { userName, password } = req.body;
    const user = await UserModel.findOne({ userName });

    if (user && await bcrypt.compare(password, user.password)) {
        const accessToken = generateAccessToken({ userName });
        // Generate refresh token
        const refreshToken = generateRefreshToken(user);
        res.json({ accessToken, refreshToken });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};


module.exports = { registerUser, loginUser };