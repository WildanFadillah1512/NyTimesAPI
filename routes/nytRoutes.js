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
const credentialsMiddleware = require('../middlewares/credentialsMiddleware');

const router = express.Router();

router.get('/top-stories', userMiddleware, credentialsMiddleware, getTopStories);
router.get('/search', userMiddleware, credentialsMiddleware, searchArticles);
router.get('/search/date', userMiddleware, credentialsMiddleware, searchArticlesByDate);
router.get('/top-stories/:category', userMiddleware, credentialsMiddleware, getTopStoriesByCategory);
router.get('/most-shared/:period', userMiddleware, credentialsMiddleware, getMostSharedArticles);
router.get('/book-reviews', userMiddleware, credentialsMiddleware, getBookReviews);
router.get('/articles/section/:section', userMiddleware, credentialsMiddleware, getArticlesBySection);


module.exports = router;