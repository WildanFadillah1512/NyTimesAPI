const express = require('express');
const { getAllArticles, addArticle, updateArticle, deleteArticle } = require('../controllers/articlesController');
const verifyToken = require('../middlewares/verifyToken');
const verifyLogin = require('../middlewares/verifyLogin');
const { patternValidation, schema } = require('../middlewares/patternValidation');

const router = express.Router();

router.get('/', patternValidation(schema), verifyLogin, verifyToken, getAllArticles);
router.post('/', verifyToken, addArticle);
router.put('/:id_article', verifyToken, updateArticle);
router.delete('/:id_article', verifyToken, deleteArticle);

module.exports = router;
