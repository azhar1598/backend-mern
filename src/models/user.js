const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // You may want to add additional validation for email format
  },
  age: {
    type: Number,
    // Optional: You can add validation for a minimum or maximum age
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
