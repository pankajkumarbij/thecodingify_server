const express = require('express');
const router = express.Router();
const articleController = require('../../controller/article/article');

router.post('/articlepublish', articleController.ArticlePublish);

router.get('/retrive_all_articles', articleController.RetrieveAllArticles);

router.get('/retrive_article/:id', articleController.RetrieveArticleById);

router.get('/retrive_article_by_userId/:userId', articleController.RetrieveArticleByUserid);

router.get('/retrive_article_by_subject/:subject', articleController.RetrieveArticleBySubject);

router.get('/delete_article/:id', articleController.DeleteArticleById);

router.put('/update_article/:id', articleController.UpdateArticleById);

router.put('/update_article_status/:id', articleController.UpdateArticleStatusById);

module.exports = router;