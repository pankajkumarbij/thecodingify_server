const express = require('express');
const router = express.Router();
const Subject = require('../../models/category-subject/subject');

router.post('/addsubject', async (req, res)=>{
    const subject= req.body.subject;
    const category= req.body.category;
    const image= req.body.image;
    var newSubject = new Subject({category, subject, image})
    newSubject.save()
    .then(subject => {
        var message={
            success:"successfully Added!"
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

router.get('/retrive_all_subjects',(req, res)=>{
    Subject.find({}, function(err, subjects){
        if(err){
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});

router.get('/retrive_subject/:category',(req, res)=>{
    Subject.find({'category':req.params.category}, function(err, subjects){
        if(err){
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});

module.exports = router;