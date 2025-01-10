const express = require('express');
const { getAllArticles, addArticle, updateArticle, deleteArticle } = require('../controllers/articlesController');

const router = express.Router();

router.get('/', getAllArticles);
router.post('/', addArticle);
router.put('/:id_article', updateArticle);  
router.delete('/:id_article', deleteArticle);  

module.exports = router;
