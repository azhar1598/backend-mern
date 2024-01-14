// services/userService.js

const UserModel = require('../models/user');

exports.getAllUsers = async () => {
  return await UserModel.find();
};
