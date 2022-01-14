const express = require('express');
const router = express.Router();
const bookmarkController = require('../../controller/bookmark/bookmark');

router.post('/addbookmark', bookmarkController.AddBookmark);

router.get('/retrive_bookmark/:userid', bookmarkController.RetrieveBookmarkByUserid);

router.get('/delete_bookmark/:userId/:subject', bookmarkController.DeleteBookmarkByUseridAndSubject);

module.exports = router;