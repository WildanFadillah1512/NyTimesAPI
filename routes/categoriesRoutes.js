const express = require('express');
const { getAllCategories, addCategory, updateCategory, deleteCategory } = require('../controllers/categoriesController');
const verifyToken = require('../middlewares/verifyToken');
const verifyLogin = require('../middlewares/verifyLogin');
const { patternValidation, schema } = require('../middlewares/patternValidation');

const router = express.Router();

router.get('/', patternValidation(schema), verifyLogin, verifyToken, getAllCategories);
router.post('/', verifyToken, addCategory);
router.put('/:id_category', verifyToken, updateCategory);
router.delete('/:id_category', verifyToken, deleteCategory);

module.exports = router;
