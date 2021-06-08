var Team = require("../../models/Team");

var TeamService = {
  createTeam: async function (team) {
    try {
      var team = await Team.create(team);
      return team;
    } catch (error) {
      return error;
    }
  },

  listTeams: async function () {
    try {
      var teams = await Team.find({}).populate("boards").exec();
      return teams;
    } catch (error) {
      return error;
    }
  },

  showTeam: async function (teamId) {
    try {
      var team = await Team.findById(teamId);
      return team;
    } catch (error) {
      return error;
    }
  },

  updateTeam: async function (teamId, team) {
    try {
      var team = Team.findByIdAndUpdate(teamId, team, { new: true });
      return team;
    } catch (error) {
      return error;
    }
  },

  deleteTeam: async function (team) {
    try {
      return await team.remove();
    } catch (error) {
      return error;
    }
  },
  updateTeamBoards: async function (board) {
    try {
      // console.log(board, "BOARD IN TEAM SERVICE");
      var team = Team.findOneAndUpdate(
        { _id: board.teamId },
        { $push: { boards: board._id } }
      );
      // console.log(team);
      return team;
    } catch (error) {
      return error;
    }
  },
  removeBoardIdFromBoardsArr: async function (board) {
    try {
      var team = await Team.findOneAndUpdate(
        { _id: board.teamId },
        { $pull: { boards: board._id } }
      );
      return team;
    } catch (error) {
      return error;
    }
  },
};

module.exports = TeamService;
