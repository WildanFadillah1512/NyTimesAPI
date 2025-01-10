const express = require('express');
const { getAllCategories, addCategory, updateCategory, deleteCategory } = require('../controllers/categoriesController');

const router = express.Router();

router.get('/', getAllCategories);
router.post('/', addCategory);
router.put('/:id_category', updateCategory); 
router.delete('/:id_category', deleteCategory); 

module.exports = router;
