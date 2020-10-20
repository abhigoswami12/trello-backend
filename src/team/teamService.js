var Team = require("../../models/Team");

var TeamService = {
  createTeam: async function(team) {
    try {
      var team = await Team.create(team);
      return team;
    } catch (error) {
      return error;
    }
  },

  listTeams: async function() {
    try {
      var teams = await Team.find({});
      return teams;
    } catch (error) {
      return error;
    }
  },

  showTeam: async function(teamId) {
    try {
      var team = await Team.findById(teamId);
      return team;
    } catch (error) {
      return error;
    }
  },

  updateTeam: async function(teamId, team) {
    try {
      var team = Team.findByIdAndUpdate(teamId, team, { new: true });
      return team;
    } catch (error) {
      return error;
    }
  },

  deleteTeam: async function(teamId) {
    try {
      var team = Team.findByIdAndRemove(teamId);
      return team;
    } catch (error) {
      return error;
    }
  }
};

module.exports = TeamService;
