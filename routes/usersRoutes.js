const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const verifyLogin = require('../middlewares/verifyLogin');
const { register, login, getProfile, updateUser, deleteUser } = require('../controllers/usersController');
const { patternValidation, schema } = require('../middlewares/patternValidation');

const router = express.Router();

router.post('/register', patternValidation(schema), register);
router.post('/login', patternValidation(schema), verifyLogin, login);
router.get('/profile', patternValidation(schema), verifyLogin, verifyToken, getProfile);
router.put('/profile', patternValidation(schema), verifyLogin, verifyToken, updateUser);
router.delete('/profile', patternValidation(schema), verifyLogin, verifyToken, deleteUser);

module.exports = router;