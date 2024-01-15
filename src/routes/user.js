// routes/userRoutes.js


const router = require('express').Router();
const UserController = require('../controllers/user');
const { authenticateToken } = require('../middlewares/auth');

router.get('/', authenticateToken, UserController.getAllUsers);

// router.post('/', UserController.createUser);


module.exports = router;
