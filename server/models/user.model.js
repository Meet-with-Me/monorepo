const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  google_id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  full_name: {
    type: String,
    trim: true,
  },
  hosted: [{ type: ObjectId, ref: "Session" }],
  participated: [{ type: ObjectId, ref: "Session" }],
});

exports.User = mongoose.model("User", userSchema);
