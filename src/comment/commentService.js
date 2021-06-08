var Comment = require("../../models/Comment");

var CommentService = {
  createComment: async function(comment) {
    try {
      var comment = await Comment.create(comment);
      return comment;
    } catch (error) {
      return error;
    }
  },

  listComments: async function() {
    try {
      var comments = await Comment.find({});
      return comments;
    } catch (error) {
      return error;
    }
  },

  showComment: async function(commentId) {
    try {
      var comment = await Comment.findById(commentId);
      return comment;
    } catch (error) {
      return error;
    }
  },

  updateComment: async function(commentId, comment) {
    try {
      var comment = Comment.findByIdAndUpdate(commentId, comment, {
        new: true
      });
      return comment;
    } catch (error) {
      return error;
    }
  },

  deleteComment: async function(commentId) {
    try {
      var comment = Comment.findByIdAndRemove(commentId);
      return comment;
    } catch (error) {
      return error;
    }
  }
};

module.exports = CommentService;
