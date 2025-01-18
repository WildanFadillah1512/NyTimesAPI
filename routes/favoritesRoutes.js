const express = require('express');
const {
    getUserFavorites,
    addFavorite,
    updateFavorite,
    removeFavorite,
} = require('../controllers/favoritesController');
const userMiddleware = require('../middlewares/userMiddleware');

const router = express.Router();

router.get('/', userMiddleware, getUserFavorites);
router.post('/', userMiddleware, addFavorite);
router.put('/:id_favorite', userMiddleware, updateFavorite);
router.delete('/:id_favorite', userMiddleware, removeFavorite);

module.exports = router;
