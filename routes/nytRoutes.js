const express = require('express');

const {
    getTopStories,
    searchArticles,
    getTopStoriesByCategory,
    searchArticlesByDate,
    getMostViewedArticles,
    getMostSharedArticles,
    getBookReviews,
    getArticlesBySection
} = require('../controllers/nytController');

const router = express.Router();

router.get('/top-stories', getTopStories);
router.get('/search', searchArticles);
router.get('/search/date', searchArticlesByDate);
router.get('/top-stories/:category', getTopStoriesByCategory);
router.get('/most-viewed/:period', getMostViewedArticles);
router.get('/most-shared/:period', getMostSharedArticles);
router.get('/book-reviews', getBookReviews);
router.get('/articles/section/:section', getArticlesBySection);


module.exports = router;