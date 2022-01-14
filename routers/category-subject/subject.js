const express = require('express');
const router = express.Router();
const subjectController = require('../../controller/category-subject/subject');

router.post('/addsubject', subjectController.AddSubject);

router.get('/retrive_all_subjects', subjectController.RetrieveAllSubjects);

router.get('/retrive_subject/:category', subjectController.RetrieveSubjectByCategory);

module.exports = router;