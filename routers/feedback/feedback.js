const express = require('express');
const router = express.Router();
const Feedback = require('../../models/feedback/feedback');

router.post('/addfeedback', async (req, res)=>{
    const userId= req.body.userId;
    const rating= req.body.rating;
    const feedback= req.body.feedback;
    const subject= req.body.subject;
    var newFeedback = new Feedback({userId,rating,feedback,subject})
    newFeedback.save()
    .then(feedback => {
        var message={
            success:"Thanks for giving an valueable Feedback!"
        };
        res.json(message);
    })
    .catch(err => {
        var message = {
            error:"Something went wrong! "+err
        };
        res.json(message);
    })
});

router.get('/retrive_feedback/:userid/:subject',(req, res)=>{
    Feedback.find({'userId':req.params.userid, 'subject':req.params.subject}, function(err, feedback){
        if(err){
            console.log(err);
        }
        else {
            res.json(feedback);
        }
    });
});

router.get('/retrive_feedback_by_subject',(req, res)=>{
    Feedback.aggregate([{
        $group: {
            _id: '$subject',
            avgrating: {$avg: '$rating'},
            count: {$sum: 1},
        }
    }], function(err, results){
        if(err){
            console.log(err);
        }
        else{
            res.json(results);
        }
    });
});

router.get('/delete_feedback/:userId/:subject',(req, res) =>{ 
    Feedback.findOneAndRemove({'userId':req.params.userId, 'subject':req.params.subject})
    .then((feedback) => {
        if(feedback){
            var message = { success: "Feedback sucessfully removed" };
            res.json(message);
        }else{
            var message = { error: "feedback not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { success: false, err: err };
        res.json(message);
    })
});

module.exports = router;