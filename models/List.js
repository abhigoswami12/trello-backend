var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ListSchema = Schema({
  title: { type: String, required: true },
  boardId: [{ type: Schema.Types.ObjectId, ref: "Board" }],
  cards: [{ type: Schema.Types.ObjectId, ref: "Card" }]
});

module.exports = mongoose.model("List", ListSchema);
