const { deleteBoardsFromTeam } = require("../src/board/boardService");
var teamService = require("../src/team/teamService");
var userService = require("../src/user/userService");
var boardService = require("../src/board/boardService");

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

    console.log("entered teamcontroller with Id", teamId);

    console.log(req.user);
    try {
      var team = await teamService.showTeam(teamId);

      if (team.adminId.toString() === req.user._id.toString()) {
        console.log("Entered after true");
        await teamService.deleteTeam(team);
        await userService.deleteTeamIdFromUserTeamsArr(team);
        await boardService.deleteBoardsFromTeam(team);
        return res.send({ message: "team deleted successfully" });
      } else {
        return res
          .status(400)
          .send({ message: "you must be the owner of the team to delete it" });
      }
    } catch (error) {
      return error;
    }
  },
};

module.exports = teamController;
