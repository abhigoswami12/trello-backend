var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var cardSchema = Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    date: { type: Date },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    listId: { type: Schema.Types.ObjectId, ref: "List" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    labels: [{ type: Schema.Types.ObjectId, ref: "Label" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);
