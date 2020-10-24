var teamService = require("../src/team/teamService");
var userService = require("../src/user/userService");

var teamController = {
  createTeam: async function (req, res, next) {
    // console.log(req.user, "REQUEST");
    var team = req.body.team;
    team.adminId = req.user._id;
    // console.log(team);

    if (!team.name) {
      return res.status(400).send({ message: "team name is required." });
    }
    try {
      var newTeam = await teamService.createTeam(team);
      var updatedUser = await userService.updateUserTeamsArr(newTeam);
      return res.send({ team: newTeam });
    } catch (error) {
      next(error);
    }
  },

  listTeams: async function (req, res, next) {
    try {
      var teams = await teamService.listTeams();
      console.log(teams);
      return res.send({ teams });
    } catch (error) {
      next(error);
    }
  },

  showTeam: async function (req, res, next) {
    var teamId = req.params.teamId;
    try {
      var team = await teamService.showTeam(teamId);
      return res.send({ team });
    } catch (error) {
      next(error);
    }
  },

  updateTeam: async function (req, res, next) {
    var teamId = req.params.teamId;
    var team = req.body.team;
    console.log(teamId);

    try {
      var updatedTeam = await teamService.updateTeam(teamId, team);
      return res.send({ team: updatedTeam });
    } catch (error) {
      next(error);
    }
  },

  deleteTeam: async function (req, res, next) {
    var teamId = req.params.teamId;
    try {
      var deletedTeam = await teamService.deleteTeam(teamId);
      return res.send({ message: "Team successfully deleted" });
    } catch (error) {
      return error;
    }
  },
};

module.exports = teamController;
