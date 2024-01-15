// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

// middleware/authenticateToken.js
const generateToken = (user) => {
    return jwt.sign({ user }, 'your-secret-key', { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, 'your-secret-key');
    } catch (error) {
        return null;
    }
};


module.exports = { generateToken, verifyToken };
