const express = require('express');
const router = express.Router();
const articleController = require('../../controller/article/article');
const authenticateToken = require('../../middleware/user/user');

router.post('/articlepublish', authenticateToken, articleController.ArticlePublish);

router.get('/retrive_all_articles', authenticateToken, articleController.RetrieveAllArticles);

router.get('/retrive_article/:id', authenticateToken, articleController.RetrieveArticleById);

router.get('/retrive_article_by_userId/:userId', authenticateToken, articleController.RetrieveArticleByUserid);

router.get('/retrive_article_by_subject/:subject', authenticateToken, articleController.RetrieveArticleBySubject);

router.get('/delete_article/:id', authenticateToken, articleController.DeleteArticleById);

router.put('/update_article/:id', authenticateToken, articleController.UpdateArticleById);

router.put('/update_article_status/:id', authenticateToken, articleController.UpdateArticleStatusById);

module.exports = router;