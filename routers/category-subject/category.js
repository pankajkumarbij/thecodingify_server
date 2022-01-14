const express = require('express');
const router = express.Router();
const categoryController = require('../../controller/category-subject/category');

router.post('/addcategory', categoryController.AddCategory);

router.get('/retrive_all_categories', categoryController.RetrieveAllCategories);

module.exports = router;