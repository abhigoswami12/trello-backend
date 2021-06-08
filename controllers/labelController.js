var labelService = require("../src/label/labelService");

var labelController = {
  createLabel: async function(req, res, next) {
    var label = req.body.label;
    if (!label.name || !label.email || !label.password) {
      return res
        .status(400)
        .send({ message: "name, email and password are required." });
    }
    try {
      var newLabel = await labelService.createLabel(label);
      return res.send({ label: newLabel });
    } catch (error) {
      next(error);
    }
  },

  listLabels: async function(req, res, next) {
    try {
      var labels = await labelService.listLabels();
      return res.send({ labels });
    } catch (error) {
      next(error);
    }
  },

  showLabel: async function(req, res, next) {
    var labelId = req.params.labelId;
    try {
      var label = await labelService.showLabel(labelId);
      return res.send({ label });
    } catch (error) {
      next(error);
    }
  },

  updateLabel: async function(req, res, next) {
    var labelId = req.params.labelId;
    var label = req.body.label;
    console.log(labelId);

    try {
      var updatedLabel = await labelService.updateLabel(labelId, label);
      return res.send({ label: updatedLabel });
    } catch (error) {
      next(error);
    }
  },

  deleteLabel: async function(req, res, next) {
    var labelId = req.params.labelId;
    try {
      var deletedLabel = await labelService.deleteLabel(labelId);
      return res.send({ message: "Label successfully deleted" });
    } catch (error) {
      return error;
    }
  }
};

module.exports = labelController;
