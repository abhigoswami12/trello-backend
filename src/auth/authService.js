var jwt = require("jsonwebtoken");

var authService = {
  generateToken: async function(user) {
    var payload = {
      userId: user._id
    };
    var token = await jwt.sign(payload, process.env.SECRET);
    return token;
  }
};

module.exports = authService;
