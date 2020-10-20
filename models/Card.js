var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CardSchema = Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  listId: [{ type: Schema.Types.ObjectId, ref: "List" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  labels: [{ type: Schema.Types.ObjectId, ref: "Label" }]
});

module.exports = mongoose.model("Card", CardSchema);
