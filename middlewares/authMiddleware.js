var jwt = require("jsonwebtoken");
var userService = require("../src/user/userService");

var authMiddleware = {
  identifyUser: async function (req, res, next) {
    console.log("entered middleware");
    var token = req.cookies.token;
    if (token) {
      try {
        var payload = await jwt.verify(token, process.env.SECRET);
        var user = await userService.showUser(payload.userId);
        req.user = user;
        next();
      } catch (error) {
        return res.status(400).send({ message: "Invalid Token" });
      }
    } else {
      return res.status(400).send({ message: "Token Required" });
    }
  },
};
module.exports = authMiddleware;
