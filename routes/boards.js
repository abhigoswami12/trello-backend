var express = require("express");
var router = express.Router();

var boardController = require("../controllers/boardController");

/* GET boards listing. */
router.get("/:boardId", boardController.showBoard);
router.get("/", boardController.listBoards);
router.post("/", boardController.createBoard);
router.put("/:boardId", boardController.updateBoard);

router.delete("/:boardId", boardController.deleteBoard);

module.exports = router;
