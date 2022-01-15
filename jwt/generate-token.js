var jwt = require('jsonwebtoken');

const jwtAuth = {

    generateAccessToken(email,fName, lName, username) {
        return jwt.sign({ email, fName, lName, username }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    }
    
}

module.exports = jwtAuth;