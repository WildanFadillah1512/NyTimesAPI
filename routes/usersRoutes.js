const express = require('express');
const { register, login, getProfile, updateUser, deleteUser } = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateUser); 
router.delete('/profile', authMiddleware, deleteUser); 

module.exports = router;
