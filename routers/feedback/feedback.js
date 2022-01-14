const express = require('express');
const router = express.Router();
const feedbackController = require('../../controller/feedback/feedback');

router.post('/addfeedback', feedbackController.AddFeedback);

router.get('/retrive_feedback/:userid/:subject', feedbackController.RetrieveFeedbackByUseridAndSubject);

router.get('/retrive_feedback_by_subject', feedbackController.RetrieveFeedbackBySubject);

router.get('/delete_feedback/:userId/:subject', feedbackController.DeleteFeedbackByUseridAndSubject);

module.exports = router;