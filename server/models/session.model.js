const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let sessionSchema = new Schema({
  name: { type: String, required: true, trim: true },
  host_id: { type: ObjectId, ref: "User", required: true },
  start_date: { type: Date, required: true },
  responses: [
    {
      user_id: { type: ObjectId, ref: "User", required: true },
      responded: { type: Boolean, default: false },
      days: [
        [
          {
            start: { type: Integer, required: true },
            end: { type: Integer, required: true },
          },
        ],
      ],
    },
  ],
});

exports.Session = mongoose.model("Session", sessionSchema);
