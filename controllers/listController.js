var listService = require("../src/list/listService");

var listController = {
  createList: async function(req, res, next) {
    var list = req.body.list;
    if (!list.name || !list.email || !list.password) {
      return res
        .status(400)
        .send({ message: "name, email and password are required." });
    }
    try {
      var newList = await listService.createList(list);
      return res.send({ list: newList });
    } catch (error) {
      next(error);
    }
  },

  listLists: async function(req, res, next) {
    try {
      var lists = await listService.listLists();
      return res.send({ lists });
    } catch (error) {
      next(error);
    }
  },

  showList: async function(req, res, next) {
    var listId = req.params.listId;
    try {
      var list = await listService.showList(listId);
      return res.send({ list });
    } catch (error) {
      next(error);
    }
  },

  updateList: async function(req, res, next) {
    var listId = req.params.listId;
    var list = req.body.list;
    console.log(listId);

    try {
      var updatedList = await listService.updateList(listId, list);
      return res.send({ list: updatedList });
    } catch (error) {
      next(error);
    }
  },

  deleteList: async function(req, res, next) {
    var listId = req.params.listId;
    try {
      var deletedList = await listService.deleteList(listId);
      return res.send({ message: "List successfully deleted" });
    } catch (error) {
      return error;
    }
  }
};

module.exports = listController;
