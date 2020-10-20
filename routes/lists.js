var express = require("express");
var router = express.Router();

var listController = require("../controllers/listController");

/* GET lists listing. */
router.get("/:listId", listController.showList);
router.get("/", listController.listLists);
router.post("/", listController.createList);
router.put("/:listId", listController.updateList);

router.delete("/:listId", listController.deleteList);

module.exports = router;
