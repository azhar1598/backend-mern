// controllers/user.js

const UserModel = require('../models/user');

// exports.getAllUsers = async (req, res) => {

//     const users = await UserModel.find();

//     res.json(users);
// };

// Function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getAllUsers };