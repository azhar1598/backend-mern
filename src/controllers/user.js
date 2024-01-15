// controllers/user.js

const UserModel = require('../models/user');

exports.getAllUsers = async (req, res) => {

    const users = await UserModel.find();

    res.json(users);
};
