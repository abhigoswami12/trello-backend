var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LabelSchema = Schema({
  name: { type: String },
  boardId: [{ type: Schema.Types.ObjectId, ref: "Board" }]
});

module.exports = mongoose.model("Label", LabelSchema);
