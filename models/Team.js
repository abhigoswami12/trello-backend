var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var teamSchema = Schema(
  {
    name: { type: String, required: true },

    description: { type: String }, //not necessary
    adminId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    boards: [{ type: Schema.Types.ObjectId, ref: "Board" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
