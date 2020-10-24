var cardService = require("../src/card/cardService");
var listService = require("../src/list/listService");

var cardController = {
  createCard: async function (req, res, next) {
    var card = req.body.card;
    if (!card.name) {
      return res.status(400).send({ message: "name cannot be empty." });
    }
    try {
      var newCard = await cardService.createCard(card);
      var updatedList = await listService.updateListCards(newCard);
      return res.send({ card: newCard });
    } catch (error) {
      next(error);
    }
  },

  listCards: async function (req, res, next) {
    var listId = req.params.listId;
    console.log(listId, "List Id");
    try {
      var cards = await cardService.listCards(listId);
      return res.send({ cards });
    } catch (error) {
      next(error);
    }
  },

  showCard: async function (req, res, next) {
    var cardId = req.params.cardId;
    try {
      var card = await cardService.showCard(cardId);
      return res.send({ card });
    } catch (error) {
      next(error);
    }
  },

  updateCard: async function (req, res, next) {
    var cardId = req.params.cardId;
    var card = req.body.card;
    console.log(cardId);

    try {
      var updatedCard = await cardService.updateCard(cardId, card);
      return res.send({ card: updatedCard });
    } catch (error) {
      next(error);
    }
  },

  deleteCard: async function (req, res, next) {
    var cardId = req.params.cardId;
    try {
      var deletedCard = await cardService.deleteCard(cardId);
      return res.send({ message: "Card successfully deleted" });
    } catch (error) {
      return error;
    }
  },
};

module.exports = cardController;
