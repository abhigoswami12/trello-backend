var express = require("express");
var router = express.Router();

var commentController = require("../controllers/commentController");

/* GET comments listing. */
router.get("/:commentId", commentController.showComment);
router.get("/", commentController.listComments);
router.post("/", commentController.createComment);
router.put("/:commentId", commentController.updateComment);

router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
