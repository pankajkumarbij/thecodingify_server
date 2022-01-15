const express = require('express');
const router = express.Router();
const subjectController = require('../../controller/category-subject/subject');
const authenticateToken = require('../../middleware/user/user');

router.post('/addsubject', authenticateToken, subjectController.AddSubject);

router.get('/retrive_all_subjects', authenticateToken, subjectController.RetrieveAllSubjects);

router.get('/retrive_subject/:category', authenticateToken, subjectController.RetrieveSubjectByCategory);

module.exports = router;