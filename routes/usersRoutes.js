const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { register, login, getProfile, updateUser, deleteUser } = require('../controllers/usersController');
const { patternValidation, schema } = require('../middlewares/patternValidation');

const router = express.Router();

router.post('/register', patternValidation(schema), register);
router.post('/login', patternValidation(schema), login);
router.get('/profile', patternValidation(schema), verifyToken, getProfile);
router.put('/profile', patternValidation(schema), verifyToken, updateUser);
router.delete('/profile', patternValidation(schema), verifyToken, deleteUser);

module.exports = router;