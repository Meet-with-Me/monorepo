const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hosted: [{ type: ObjectId, ref: "Session" }],
  participated: [{ type: ObjectId, ref: "Session" }],
});

exports.User = mongoose.model("User", userSchema);
