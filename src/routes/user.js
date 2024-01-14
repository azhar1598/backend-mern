// routes/userRoutes.js


const router = require('express').Router();
const UserController = require('../controllers/user');

router.get('/', UserController.getAllUsers);
// router.post('/', UserController.createUser);


module.exports = router;
