var express = require("express");
var router = express.Router();

var listController = require("../controllers/listController");
var authMiddleware = require("../middlewares/authMiddleware");

/* GET lists listing. */
router.get("/:listId", listController.showList);
router.get("/", listController.listLists);
router.post("/", authMiddleware.identifyUser, listController.createList);
router.put("/:listId", listController.updateList);

router.delete(
  "/:listId",
  authMiddleware.identifyUser,
  listController.deleteList
);

module.exports = router;
