var User = require("../../models/User");

var UserService = {
  createUser: async function (user) {
    try {
      var user = await User.create(user);
      console.log(user);
      return user;
    } catch (error) {
      return error;
    }
  },

  listUsers: async function () {
    try {
      var users = await User.find({});
      return users;
    } catch (error) {
      return error;
    }
  },

  showUser: async function (userId) {
    try {
      var user = await User.findById(userId);
      return user;
    } catch (error) {
      return error;
    }
  },

  showUserByField: async function (filterObj) {
    try {
      var user = await User.findOne(filterObj);
      console.log(user, "USER found in userService");
      return user;
    } catch (error) {
      return error;
    }
  },

  updateUser: async function (userId, user) {
    try {
      var user = await User.findByIdAndUpdate(userId, user, { new: true });
      return user;
    } catch (error) {
      return error;
    }
  },

  deleteUser: async function (userId) {
    try {
      var user = await User.findByIdAndRemove(userId);
      return user;
    } catch (error) {
      return error;
    }
  },

  updateUserTeamsArr: async function (team) {
    try {
      var user = await User.findOneAndUpdate(
        { _id: team.adminId },
        { $push: { teams: team._id } }
      );
      return user;
    } catch (error) {
      return error;
    }
  },

  deleteTeamIdFromUserTeamsArr: async function (team) {
    try {
      var user = await User.findOneAndUpdate(
        { _id: team.adminId },
        { $pull: { teams: team._id } }
      );
      return user;
    } catch (error) {
      return error;
    }

    return user;
  },
  // logoutUser: async function() {
  //   try {
  //     res
  //   } catch (error) {

  //   }
  // }
};

module.exports = UserService;
