var userService = require("../src/user/userService");
// var User = require("../models/User");
// var authService = require("../src/auth/authService");

var userController = {
  createUser: async function (req, res, next) {
    console.log(req.body.user, "userrrr");
    var { name, email, password } = req.body.user;
    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ message: "name, email and password are required." });
    }

    try {
      // var userWithName = await userService.showUserByField({ name });
      // console.log("userWithName", userWithName);
      // if (userWithName) {
      //   return res
      //     .status(400)
      //     .send({ message: "name already exists.Please try some other name" });
      // }
      var userWithEmail = await userService.showUserByField({ email });
      console.log(userWithEmail, "userWithEmail");
      if (userWithEmail) {
        return res
          .status(400)
          .send({ message: "email already exists.Please try other email" });
      }

      var newUser = await userService.createUser(req.body.user);
      return res.send({ user: newUser });
    } catch (error) {
      next(error);
    }
  },

  listUsers: async function (req, res, next) {
    try {
      var users = await userService.listUsers();
      return res.send({ users });
    } catch (error) {
      next(error);
    }
  },

  showUser: async function (req, res, next) {
    var userId = req.params.userId;
    try {
      var user = await userService.showUser(userId);
      return res.send({ user });
    } catch (error) {
      next(error);
    }
  },

  updateUser: async function (req, res, next) {
    var userId = req.params.userId;
    var user = req.body.user;
    console.log(userId);

    try {
      var updatedUser = await userService.updateUser(userId, user);
      return res.send({ user: updatedUser });
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async function (req, res, next) {
    var userId = req.params.userId;
    try {
      var deletedUser = await userService.deleteUser(userId);
      return res.send({ message: "User successfully deleted" });
    } catch (error) {
      return error;
    }
  },

  showMe: async function (req, res, next) {
    // console.log(req.user, "user in show Me");
    var userId = req.user._id;
    try {
      var user = await userService.showUser(userId);
      return res.send({ user });
    } catch (error) {
      return error;
    }
  },

  logout: function (req, res, next) {
    console.log("enetered");
    // console.log(res, "RESPONSE");
    res.clearCookie("token");
    res.send({ message: "Logged out" });
  },
};

function generateUserFormat(user, token) {
  return {
    name: user.name,
    token,
    email: user.email,
    bio: user.bio,
    image: user.photoUrl,
    teams: user.teams,
    id: user._id,
  };
}

module.exports = userController;
