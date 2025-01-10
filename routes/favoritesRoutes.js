const express = require('express');
const {
    getUserFavorites,
    addFavorite,
    updateFavorite,
    removeFavorite,
} = require('../controllers/favoritesController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getUserFavorites);
router.post('/', authMiddleware, addFavorite);
router.put('/:id_favorite', authMiddleware, updateFavorite); 
router.delete('/:id_favorite', authMiddleware, removeFavorite);  

module.exports = router;
