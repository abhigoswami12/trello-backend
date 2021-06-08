var commentService = require("../src/comment/commentService");

var commentController = {
  createComment: async function(req, res, next) {
    var comment = req.body.comment;
    if (!comment.name || !comment.email || !comment.password) {
      return res
        .status(400)
        .send({ message: "name, email and password are required." });
    }
    try {
      var newComment = await commentService.createComment(comment);
      return res.send({ comment: newComment });
    } catch (error) {
      next(error);
    }
  },

  listComments: async function(req, res, next) {
    try {
      var comments = await commentService.listComments();
      return res.send({ comments });
    } catch (error) {
      next(error);
    }
  },

  showComment: async function(req, res, next) {
    var commentId = req.params.commentId;
    try {
      var comment = await commentService.showComment(commentId);
      return res.send({ comment });
    } catch (error) {
      next(error);
    }
  },

  updateComment: async function(req, res, next) {
    var commentId = req.params.commentId;
    var comment = req.body.comment;
    console.log(commentId);

    try {
      var updatedComment = await commentService.updateComment(
        commentId,
        comment
      );
      return res.send({ comment: updatedComment });
    } catch (error) {
      next(error);
    }
  },

  deleteComment: async function(req, res, next) {
    var commentId = req.params.commentId;
    try {
      var deletedComment = await commentService.deleteComment(commentId);
      return res.send({ message: "Comment successfully deleted" });
    } catch (error) {
      return error;
    }
  }
};

module.exports = commentController;
