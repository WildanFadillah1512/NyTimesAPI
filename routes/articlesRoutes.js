const express = require('express');
const { getAllArticles, addArticle, updateArticle, deleteArticle } = require('../controllers/articlesController');
const userMiddleware = require('../middlewares/userMiddleware')

const router = express.Router();

router.get('/', userMiddleware, getAllArticles);
router.post('/', userMiddleware, addArticle);
router.put('/:id_article', userMiddleware, updateArticle);
router.delete('/:id_article', userMiddleware, deleteArticle);

module.exports = router;
