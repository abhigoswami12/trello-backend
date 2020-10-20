var User = require("../../models/User");

var UserService = {
  createUser: async function(user) {
    try {
      var user = await User.create(user);
      console.log(user);
      return user;
    } catch (error) {
      return error;
    }
  },

  listUsers: async function() {
    try {
      var users = await User.find({});
      return users;
    } catch (error) {
      return error;
    }
  },

  showUser: async function(userId) {
    try {
      var user = await User.findById(userId);
      return user;
    } catch (error) {
      return error;
    }
  },

  showUserByField: async function(filterObj) {
    try {
      var user = await User.findOne(filterObj);
      console.log(user, "USER");
      return user;
    } catch (error) {
      return error;
    }
  },

  updateUser: async function(userId, user) {
    try {
      var user = User.findByIdAndUpdate(userId, user, { new: true });
      return user;
    } catch (error) {
      return error;
    }
  },

  deleteUser: async function(userId) {
    try {
      var user = User.findByIdAndRemove(userId);
      return user;
    } catch (error) {
      return error;
    }
  }
};

module.exports = UserService;
