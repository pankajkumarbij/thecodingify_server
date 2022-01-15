const express = require('express');
const router = express.Router();
const categoryController = require('../../controller/category-subject/category');
const authenticateToken = require('../../middleware/user/user');

router.post('/addcategory', authenticateToken, categoryController.AddCategory);

router.get('/retrive_all_categories', authenticateToken, categoryController.RetrieveAllCategories);

module.exports = router;