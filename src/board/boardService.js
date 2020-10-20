var Board = require("../../models/Board");

var BoardService = {
  createBoard: async function(board) {
    try {
      var board = await Board.create(board);
      return board;
    } catch (error) {
      return error;
    }
  },

  listBoards: async function() {
    try {
      var boards = await Board.find({});
      return boards;
    } catch (error) {
      return error;
    }
  },

  showBoard: async function(boardId) {
    try {
      var board = await Board.findById(boardId);
      return board;
    } catch (error) {
      return error;
    }
  },

  updateBoard: async function(boardId, board) {
    try {
      var board = Board.findByIdAndUpdate(boardId, board, { new: true });
      return board;
    } catch (error) {
      return error;
    }
  },

  deleteBoard: async function(boardId) {
    try {
      var board = Board.findByIdAndRemove(boardId);
      return board;
    } catch (error) {
      return error;
    }
  }
};

module.exports = BoardService;
