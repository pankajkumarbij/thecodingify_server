var jwt = require('jsonwebtoken');

const jwtAuth = {

  generateAccessToken(email,fName, lName, username, id) {
    return jwt.sign({ email, fName, lName, username, id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
  }
    
}

module.exports = jwtAuth;