const express = require('express');
const { getAllCategories, addCategory, updateCategory, deleteCategory } = require('../controllers/categoriesController');
const verifyToken = require('../middlewares/verifyToken');
const verifyLogin = require('../middlewares/verifyLogin');

const router = express.Router();

router.get('/', verifyToken, verifyLogin, getAllCategories);
router.post('/', verifyToken, addCategory);
router.put('/:id_category', verifyToken, updateCategory);
router.delete('/:id_category', verifyToken, deleteCategory);

module.exports = router;
