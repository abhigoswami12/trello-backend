var jwt = require("jsonwebtoken");

var authService = {
  generateToken: async function (user) {
    console.log("Entered Generate Token with user", user);
    var payload = {
      userId: user.id,
    };
    // console.log(process.env);
    var token = await jwt.sign(payload, process.env.SECRET);
    console.log("token generated in authserVice", token);
    return token;
  },
};

module.exports = authService;
