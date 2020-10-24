var jwt = require("jsonwebtoken");

var authService = require("../src/auth/authService");
var userService = require("../src/user/userService");

var authController = {
  loginUser: async function (req, res, next) {
    console.log("Entered with user", req.body.user);
    var { email, password } = req.body.user;
    if (!email || !password) {
      return res.status(400).send({ message: "email/password required" });
    }
    try {
      var user = await userService.showUserByField({ email });
      console.log(user, "Founded User");
      if (!user) {
        return res.status(400).send({ message: "email not registered" });
      }
      var isPassword = await user.validatePassword(password);
      if (!isPassword) {
        return res.status(400).send({
          message: "Password is wrong! Please enter correct password!",
        });
      }
      console.log(isPassword);
      var token = await authService.generateToken(user);
      console.log(token, "Token");
      res.cookie("token", token, {
        httpOnly: true,
      });
      console.log(res.cookie);

      return res.send({ user });
    } catch (error) {
      return error;
    }
  },
};

module.exports = authController;
