var Card = require("../../models/Card");

var CardService = {
  createCard: async function (card) {
    try {
      var card = await Card.create(card);
      return card;
    } catch (error) {
      return error;
    }
  },

  listCards: async function (listId) {
    try {
      var cards = await Card.find({ listId: listId }).populate({
        path: "listId",
      });
      console.log(cards, "CARDS");
      return cards;
    } catch (error) {
      return error;
    }
  },

  showCard: async function (cardId) {
    try {
      var card = await Card.findById(cardId);
      return card;
    } catch (error) {
      return error;
    }
  },

  updateCard: async function (cardId, card) {
    try {
      var card = Card.findByIdAndUpdate(cardId, card, { new: true });
      return card;
    } catch (error) {
      return error;
    }
  },

  deleteCard: async function (cardId) {
    try {
      var card = Card.findByIdAndRemove(cardId);
      return card;
    } catch (error) {
      return error;
    }
  },
};

module.exports = CardService;
