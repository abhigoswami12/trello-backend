var express = require("express");
var router = express.Router();

var cardController = require("../controllers/cardController");
var authMiddleware = require("../middlewares/authMiddleware");

/* GET cards listing. */
router.get("/:cardId", cardController.showCard);
router.get("/:listId/cards", cardController.listCards);
router.post("/", authMiddleware.identifyUser, cardController.createCard);
router.put("/:cardId", cardController.updateCard);

router.delete("/:cardId", cardController.deleteCard);

module.exports = router;
