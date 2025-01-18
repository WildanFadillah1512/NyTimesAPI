const express = require('express');
const { register, login, getProfile, updateUser, deleteUser } = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');
const { patternValidation, schema } = require('../middlewares/patternValidation');
const router = express.Router();

router.post('/register', patternValidation(schema), register);
router.post('/login', patternValidation(schema), login);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateUser);
router.delete('/profile', authMiddleware, deleteUser);

module.exports = router;