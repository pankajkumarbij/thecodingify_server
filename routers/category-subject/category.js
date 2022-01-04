const express = require('express');
const router = express.Router();
const Category = require('../../models/category-subject/category');

router.post('/addcategory', async (req, res)=>{
    const category= req.body.category;
    var newCategory = new Category({category})
    newCategory.save()
    .then(category => {
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

router.get('/retrive_all_categories',(req, res)=>{
    Category.find({}, function(err, categories){
        if(err){
            console.log(err);
        }
        else {
            res.json(categories);
        }
    });
});

module.exports = router;