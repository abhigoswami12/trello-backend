var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

// add image
//add regex in email
//hashing and salting in password
var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    password: { type: String, required: true },
    photoUrl: {
      type: String,
      default: "/images/user-profile-svgrepo-com (1).svg"
    },
    teams: [{ type: Schema.Types.ObjectId, ref: "Team" }]
  },
  { timestamps: true }
);

// PreSave hook for bcrypting password
userSchema.pre("save", function(next) {
  if (this.password && this.isModified("password")) {
    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

userSchema.methods.validatePassword = async function(password) {
  return await bcrypt.compare(password, this.password); // returns true or false
};

userSchema.methods.toJSON = function() {
  var user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model("User", userSchema);
