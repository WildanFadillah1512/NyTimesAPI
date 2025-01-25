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
const { patternValidation, schema } = require('../middlewares/patternValidation');

const router = express.Router();

router.get('/top-stories', patternValidation(schema), verifyLogin, verifyToken, getTopStories);
router.get('/search', patternValidation(schema), verifyLogin, verifyToken, searchArticles);
router.get('/search/date', patternValidation(schema), verifyLogin, verifyToken, searchArticlesByDate);
router.get('/top-stories/:category', patternValidation(schema), verifyLogin, verifyToken, getTopStoriesByCategory);
router.get('/most-shared/:period', patternValidation(schema), verifyLogin, verifyToken, getMostSharedArticles);
router.get('/book-reviews', patternValidation(schema), verifyLogin, verifyToken, getBookReviews);
router.get('/articles/section/:section', patternValidation(schema), verifyLogin, verifyToken, getArticlesBySection);


module.exports = router;