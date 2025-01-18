const express = require('express');
const userMiddleware = require('../middlewares/userMiddleware');
const { register, login, getProfile, updateUser, deleteUser } = require('../controllers/usersController');
const { patternValidation, schema } = require('../middlewares/patternValidation');

const router = express.Router();

router.post('/register', patternValidation(schema), register);
router.post('/login', patternValidation(schema), login);
router.get('/profile', userMiddleware, getProfile);
router.put('/profile', userMiddleware, updateUser);
router.delete('/profile', userMiddleware, deleteUser);

module.exports = router;