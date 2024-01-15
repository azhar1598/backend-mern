// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign({ user }, 'your-access-secret-key', { expiresIn: '1h' });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ user }, 'your-refresh-secret-key', { expiresIn: '7d' });
};

const verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, 'your-access-secret-key');
    } catch (error) {
        return null;
    }
};

const verifyRefreshToken = (token) => {
    try {
        return jwt.verify(token, 'your-refresh-secret-key');
    } catch (error) {
        return null;
    }
};

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const user = verifyAccessToken(token);

    if (!user) {
        return res.status(401).json({ message: 'Invalid token.' });
    }

    req.user = user; // Attach the user to the request object for later use
    next(); // Call next to pass control to the next middleware or route handler
};



module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
    authenticateToken
};
