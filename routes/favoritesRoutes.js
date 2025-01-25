const express = require('express');
const { getUserFavorites, addFavorite, updateFavorite, removeFavorite, } = require('../controllers/favoritesController');
const verifyToken = require('../middlewares/verifyToken');
const verifyLogin = require('../middlewares/verifyLogin');
const { patternValidation, schema } = require('../middlewares/patternValidation');

const router = express.Router();

router.get('/', patternValidation(schema), verifyLogin, verifyToken, getUserFavorites);
router.post('/', verifyToken, addFavorite);
router.put('/:id_favorite', verifyToken, updateFavorite);
router.delete('/:id_favorite', verifyToken, removeFavorite);

module.exports = router;
