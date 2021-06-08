var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = Schema({
  content: { type: String },
  author: [{ type: Schema.Types.ObjectId, ref: "User" }],
  cardId: [{ type: Schema.Types.ObjectId, ref: "Card" }]
});

module.exports = mongoose.model("Comment", CommentSchema);
