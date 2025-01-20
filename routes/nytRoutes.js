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

const userMiddleware = require('../middlewares/userMiddleware')

const router = express.Router();

router.get('/top-stories', userMiddleware, getTopStories);
router.get('/search', userMiddleware, searchArticles);
router.get('/search/date', userMiddleware, searchArticlesByDate);
router.get('/top-stories/:category', userMiddleware, getTopStoriesByCategory);
router.get('/most-shared/:period', userMiddleware, getMostSharedArticles);
router.get('/book-reviews', userMiddleware, getBookReviews);
router.get('/articles/section/:section', userMiddleware, getArticlesBySection);


module.exports = router;