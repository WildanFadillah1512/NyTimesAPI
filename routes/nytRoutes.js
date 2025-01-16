const express = require('express');

const {
    getTopStories,
    searchArticles,
    getTopStoriesByCategory,
    searchArticlesByDate,
    getMostPopularArticles,
    getMostSharedArticles,
    getBookReviews,
    getMovieReviews,
    getArticlesBySection,
    getArticleByUrl
} = require('../controllers/nytController');

const router = express.Router();

router.get('/top-stories', getTopStories);
router.get('/search', searchArticles);
router.get('/search/date', searchArticlesByDate);
router.get('/top-stories/:category', getTopStoriesByCategory);
router.get('/most-popular/:period', getMostPopularArticles);
router.get('/most-shared/:period', getMostSharedArticles);
router.get('/book-reviews', getBookReviews);
// router.get('/movie-reviews/', getMovieReviews);
router.get('/articles/section/:section', getArticlesBySection);
router.get('/article/url/:url', getArticleByUrl);

module.exports = router;