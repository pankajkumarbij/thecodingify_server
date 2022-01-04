const express = require('express');
const router = express.Router();
const Article = require('../../models/article/article');
// const multer  = require('multer')

// const storageEngine = multer.diskStorage ({
//     destination: './public/course/',
//     filename: function (req, file, callback) {
//         callback (
//             null,
//             file.fieldname + '-' + Date.now () + path.extname (file.originalname)
//         );
//     },
// });

// const fileFilter = (req, file, callback) => {
//     let pattern = /pdf/; // reqex
  
//     if (pattern.test (path.extname (file.originalname))) {
//         callback (null, true);
//     } else {
//         callback ('Error: not a valid file');
//     }
// };

// const upload = multer ({
//     storage: storageEngine,
//     fileFilter  
// });

// router.post ('/upload', upload.single ('uploadedFile'), (req, res) => {
//     console.log(req.file);
//     // res.json (req.file).status (200);
//     res.send("ok");
// });

router.post('/articlepublish', async (req, res)=>{
    const userId= req.body.userId;
    const category= req.body.category;
    const subject= req.body.subject;
    const title= req.body.title;
    const content= req.body.content;
    var newArticle = new Article({userId,category,subject,title,content})
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

module.exports = router;