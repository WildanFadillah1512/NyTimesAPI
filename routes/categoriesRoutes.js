const express = require('express');
const { getAllCategories, addCategory, updateCategory, deleteCategory } = require('../controllers/categoriesController');
const userMiddleware = require('../middlewares/userMiddleware')

const router = express.Router();

router.get('/', userMiddleware, getAllCategories);
router.post('/', userMiddleware, addCategory);
router.put('/:id_category', userMiddleware, updateCategory);
router.delete('/:id_category', userMiddleware, deleteCategory);

module.exports = router;
