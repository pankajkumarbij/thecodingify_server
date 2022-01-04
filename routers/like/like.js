const express = require('express');
const router = express.Router();
const Like = require('../../models/like/like');

router.post('/addlike', async (req, res)=>{
    const userId= req.body.userId;
    const subject= req.body.subject;
    var newLike = new Like({userId,subject})
    newLike.save()
    .then(like => {
        var message={
            success:"successfully Liked!"
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

router.get('/retrive_likes',(req, res)=>{
    Like.aggregate([{
        $group: {
            _id: '$subject',
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

router.get('/retrive_like/:userid',(req, res)=>{
    Like.find({'userId':req.params.userid}, function(err, like){
        if(err){
            console.log(err);
        }
        else {
            res.json(like);
        }
    });
});

router.get('/delete_like/:userId/:subject',(req, res) =>{ 
    Like.findOneAndRemove({'userId':req.params.userId, 'subject':req.params.subject})
    .then((like) => {
        if(like){
            var message = { success: "Like sucessfully removed" };
            res.json(message);
        }else{
            var message = { error: "Like not found" };
            res.json(message);
        }
    }).catch(err => {
        console.log(err);
        var message = { success: false, err: err };
        res.json(message);
    })
});

module.exports = router;