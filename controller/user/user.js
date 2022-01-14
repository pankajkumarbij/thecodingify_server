const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../../models/user/user');

var userController={

    Register(req, res){
        if(req.body.password==req.body.confirm_password){
            bcrypt.hash(req.body.password, 12, function(err, hash){
                const fName= req.body.fName;
                const lName= req.body.lName;
                const email= req.body.email;
                const username= req.body.username;
                const password= hash;
                var newUser = new User({fName,lName,username,email,password})
                newUser.save()
                .then(user => {
                    var message={success:"successfully registered!",data:user};
                    res.json(message);
                })
                .catch(err => {
                    var message = {message:""};
                    if( err.code=="11000" && Object.keys(err.keyValue)[0] == "email"){
                        message.message="email already exist!";
                    }
                    else if(Object.keys(err.errors)[0]=="email")
                    {
                        message.message=err.errors.email.properties.message;
                    }
                    else if(Object.keys(err.errors)[0]=="fName")
                    {
                        message.message=err.errors.fName.properties.message;
                    }
                    else if(Object.keys(err.errors)[0]=="password")
                    {
                        message.message=err.errors.password.properties.message;
                    }
                    else if(Object.keys(err.errors)[0]=="username")
                    {
                        message.message=err.errors.username.properties.message;
                    }
                    else{
                        message.message="Something went wrong!";
                    }
                    res.json(message);
                })     
            });
        }
        else{
            var message = { 
                error:"password and confirm password not matched" 
            };
            res.json(message);
        }
    },

    Login(req, res){
        User.findOne({ email: req.body.email}, function(err, user){
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
                            message: { success: "Successfully Login" }
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
    },
    
}

module.exports = userController;