var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//add background and description (but ask why do we need to add description)
var BoardSchema = Schema({
  title: { type: String, required: true },
  teamId: [{ type: Schema.Types.ObjectId, ref: "Team" }],
  lists: [{ type: Schema.Types.ObjectId, ref: "List" }]
});

module.exports = mongoose.model("Board", BoardSchema);
