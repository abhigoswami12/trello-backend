var List = require("../../models/List");

var ListService = {
  createList: async function(list) {
    try {
      var list = await List.create(list);
      return list;
    } catch (error) {
      return error;
    }
  },

  listLists: async function() {
    try {
      var lists = await List.find({});
      return lists;
    } catch (error) {
      return error;
    }
  },

  showList: async function(listId) {
    try {
      var list = await List.findById(listId);
      return list;
    } catch (error) {
      return error;
    }
  },

  updateList: async function(listId, list) {
    try {
      var list = List.findByIdAndUpdate(listId, list, { new: true });
      return list;
    } catch (error) {
      return error;
    }
  },

  deleteList: async function(listId) {
    try {
      var list = List.findByIdAndRemove(listId);
      return list;
    } catch (error) {
      return error;
    }
  }
};

module.exports = ListService;
