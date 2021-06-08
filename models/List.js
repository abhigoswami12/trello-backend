var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var listSchema = Schema(
  {
    name: { type: String, required: true },
    boardId: { type: Schema.Types.ObjectId, ref: "Board" },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", listSchema);
