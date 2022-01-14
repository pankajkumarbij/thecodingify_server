const Subject = require('../../models/category-subject/subject');

const subjectController={

    AddSubject(req, res){
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
    },

    RetrieveAllSubjects(req, res){
        Subject.find({}, function(err, subjects){
            if(err){
                console.log(err);
            }
            else {
                res.json(subjects);
            }
        });
    },

    RetrieveSubjectByCategory(req, res){
        Subject.find({'category':req.params.category}, function(err, subjects){
            if(err){
                console.log(err);
            }
            else {
                res.json(subjects);
            }
        });
    },

}

module.exports = subjectController;