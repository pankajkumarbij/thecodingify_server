const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const Admin = require('../../models/admin/admin');

// router.post('/adminregister', async (req, res)=>{
//     if(req.body.password==req.body.confirm_password){
//         bcrypt.hash(req.body.password, 12, function(err, hash){
//             const name= req.body.name;
//             const email= req.body.email;
//             const password= hash;
//             var newUser = new Admin({name,email,password})
//             newUser.save()
//             .then(user => {
//                 var message={
//                     success:"successfully registered!"
//                 };
//                 res.json(message);
//             })
//             .catch(err => {
//                 var message = {
//                     error:"Something went wrong!"
//                 };
//                 res.json(message);
//             })     
//         });
//     }
//     else{
//         var message = { 
//             error:"password and confirm password not matched" 
//         };
//         res.json(message);
//     }
// });

router.post('/admin', (req, res)=>{
    Admin.findOne({ email: req.body.email}, function(err, user){
        if(err){
            res.json(err);
        }
        else if(!user){
            var message = { error: "user not found with this email"}
            res.json(message);

        }
        else {
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if(result){
                    var token = jwt.sign({ email: user.email }, 'asthara-agro');
                    var output = { 
                        token:token, 
                        name:user.name, 
                        email:user.email, 
                        id:user._id, 
                        message: { success: "Admin Successfully Login" }
                    }
                    res.json(output);
                }
                else{
                    var message = { 
                        error: "email and password is not matched" 
                    }
                    res.json(message);
                }
            })
        }
    });
});

module.exports = router;