const express = require('express');
const router = express.Router();
const likeController = require('../../controller/like/like');

router.post('/addlike', likeController.AddLike);

router.get('/retrive_likes', likeController.RetrieveLikes);

router.get('/retrive_like/:userid', likeController.RetrieveLikeByUserid);

router.get('/delete_like/:userId/:subject', likeController.DeleteLikeByUseridAndSubject);

module.exports = router;