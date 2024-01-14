// controllers/user.js
const UserService = require('../services/user');

exports.getAllUsers = async (req, res) => {
  const users = await UserService.getAllUsers();
  res.json(users);
};
