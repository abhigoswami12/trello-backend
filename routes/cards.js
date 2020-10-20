var express = require("express");
var router = express.Router();

var cardController = require("../controllers/cardController");

/* GET cards listing. */
router.get("/:cardId", cardController.showCard);
router.get("/", cardController.listCards);
router.post("/", cardController.createCard);
router.put("/:cardId", cardController.updateCard);

router.delete("/:cardId", cardController.deleteCard);

module.exports = router;
