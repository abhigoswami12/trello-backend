var boardService = require("../src/board/boardService");
var teamService = require("../src/team/teamService");
var listService = require("../src/list/listService");
var cardService = require("../src/card/cardService");

var boardController = {
  createBoard: async function (req, res, next) {
    var board = req.body.board;
    var teamId = req.body.board.teamId;
    board.boardOwner = req.user._id;
    // console.log(board);
    if (!board.name) {
      return res.status(400).send({ message: "name is required." });
    }
    try {
      var newBoard = await boardService.createBoard(board);
      var updatedTeam = await teamService.updateTeamBoards(newBoard);
      return res.send({ board: newBoard });
    } catch (error) {
      next(error);
    }
  },

  listBoards: async function (req, res, next) {
    try {
      var boards = await boardService.listBoards();
      return res.send({ boards });
    } catch (error) {
      next(error);
    }
  },

  showBoard: async function (req, res, next) {
    var boardId = req.params.boardId;
    try {
      var board = await boardService.showBoard(boardId);

      return res.send({ board });
    } catch (error) {
      next(error);
    }
  },

  updateBoard: async function (req, res, next) {
    var boardId = req.params.boardId;
    var board = req.body.board;
    // console.log(boardId);

    try {
      var updatedBoard = await boardService.updateBoard(boardId, board);
      return res.send({ board: updatedBoard });
    } catch (error) {
      next(error);
    }
  },

  deleteBoard: async function (req, res, next) {
    console.log("entered delete board");
    var boardId = req.params.boardId;
    try {
      var board = await boardService.showBoard(boardId);
      console.log(board.boardOwner);
      console.log(req.user._id);
      // if (board.boardOwner.toString() === req.user._id.toString()) {
      await boardService.deleteBoard(board);
      await listService.deleteListsFromBoard(board);
      await teamService.removeBoardIdFromBoardsArr(board);
      await cardService.removeCardsFromBoard(board);
      return res.send({ message: "Board successfully deleted" });
      // } else {
      //   return res
      //     .status(400)
      //     .send({ message: "you must be the owner of the board to delete it" });
      // }
    } catch (error) {
      return error;
    }
  },
};

module.exports = boardController;
