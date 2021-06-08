var Label = require("../../models/Label");

var LabelService = {
  createLabel: async function(label) {
    try {
      var label = await Label.create(label);
      return label;
    } catch (error) {
      return error;
    }
  },

  listLabels: async function() {
    try {
      var labels = await Label.find({});
      return labels;
    } catch (error) {
      return error;
    }
  },

  showLabel: async function(labelId) {
    try {
      var label = await Label.findById(labelId);
      return label;
    } catch (error) {
      return error;
    }
  },

  updateLabel: async function(labelId, label) {
    try {
      var label = Label.findByIdAndUpdate(labelId, label, { new: true });
      return label;
    } catch (error) {
      return error;
    }
  },

  deleteLabel: async function(labelId) {
    try {
      var label = Label.findByIdAndRemove(labelId);
      return label;
    } catch (error) {
      return error;
    }
  }
};

module.exports = LabelService;
