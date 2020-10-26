var express = require("express");
var router = express.Router();

var boardController = require("../controllers/boardController");
const authMiddleware = require("../middlewares/authMiddleware");

/* GET boards listing. */
router.get("/:boardId", authMiddleware.identifyUser, boardController.showBoard);
router.get("/", authMiddleware.identifyUser, boardController.listBoards);
router.post("/", authMiddleware.identifyUser, boardController.createBoard);
router.put("/:boardId", boardController.updateBoard);

router.delete(
  "/:boardId",
  authMiddleware.identifyUser,
  boardController.deleteBoard
);

module.exports = router;
