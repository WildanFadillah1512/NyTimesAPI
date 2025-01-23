const express = require('express');

const {
    getTopStories,
    searchArticles,
    getTopStoriesByCategory,
    searchArticlesByDate,
    getMostSharedArticles,
    getBookReviews,
    getArticlesBySection
} = require('../controllers/nytController');

const verifyToken = require('../middlewares/verifyToken');
const verifyLogin = require('../middlewares/verifyLogin');

const router = express.Router();

router.get('/top-stories', verifyToken, verifyLogin, getTopStories);
router.get('/search', verifyToken, verifyLogin, searchArticles);
router.get('/search/date', verifyToken, verifyLogin, searchArticlesByDate);
router.get('/top-stories/:category', verifyToken, verifyLogin, getTopStoriesByCategory);
router.get('/most-shared/:period', verifyToken, verifyLogin, getMostSharedArticles);
router.get('/book-reviews', verifyToken, verifyLogin, getBookReviews);
router.get('/articles/section/:section', verifyToken, verifyLogin, getArticlesBySection);


module.exports = router;