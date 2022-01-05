const express = require('express');
const router = express.Router();
const Article = require('../../models/article/article');

router.post('/articlepublish', async (req, res)=>{
    const userId = req.body.userId;
    const name = req.body.name;
    const category = req.body.category;
    const subject = req.body.subject;
    const title = req.body.title;
    const content = req.body.content;
    var newArticle = new Article({userId,name,category,subject,title,content})
    newArticle.save()
    .then(article => {
        var message={
            success:"successfully Published!"
        };
        res.json(message);
    })
    .catch(err => {
        var message = {
            error:"Something went wrong!"
        };
        res.json(message);
    })
});

router.get('/retrive_all_articles',(req, res)=>{
    Article.find({}, function(err, articles){
        if(err){
            console.log(err);
        }
        else {
            res.json(articles);
        }
    });
});

router.get('/retrive_article/:id',(req, res)=>{
    Article.find({'_id':req.params.id}, function(err, article){
        if(err){
            console.log(err);
        }
        else {
            res.json(article);
        }
    });
});

router.get('/retrive_article_by_userId/:userId',(req, res)=>{
    Article.find({'userId':req.params.userId}, function(err, article){
        if(err){
            console.log(err);
        }
        else {
            res.json(article);
        }
    });
});

router.get('/retrive_article_by_subject/:subject',(req, res)=>{
    Article.find({'subject':req.params.subject}, function(err, article){
        if(err){
            console.log(err);
        }
        else {
            res.json(article);
        }
    });
});

router.get('/delete_article/:id',(req, res) =>{ 
    Article.findOneAndRemove({'_id':req.params.id})
    .then((article) => {
        if(article){
            var message = { success: "Article sucessfully deleted" };
            res.json(message);
        }else{
            var message = { error: "Article not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { success: false, err: err };
        res.json(message);
    })
});

router.put('/update_article/:id',(req, res) =>{
    var article_update = {
        title: req.body.title,
        content: req.body.content,
    }
    Article.findOneAndUpdate({'_id':req.params.id}, article_update)
    .then((article) => {
        if(article){
            var message = { message: "Article sucessfully updated" };
            res.json(message);
        }else{
            var message = { message: "Article not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = {message:"Something went wrong!", success: false, err: err };
        res.json(message);
    })
});

router.put('/update_article_status/:id',(req, res) =>{
    var article_update = {
        status: req.body.status,
    }
    Article.findOneAndUpdate({'_id':req.params.id}, article_update)
    .then((article) => {
        if(article){
            var message = { message: "Article Status sucessfully updated" };
            res.json(message);
        }else{
            var message = { message: "Article not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = {message:"Something went wrong!", success: false, err: err };
        res.json(message);
    })
});

module.exports = router;