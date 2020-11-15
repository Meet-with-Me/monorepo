const express = require("express");
const userRouter = express.Router();

let User = require("../models/user.model");

userRouter.post("/login", async (req, res, next) => {
  try {
    const googleId = req.body.googleId;
    const email = req.body.email;
    const fullName = req.body.fullName;

    const exists = await User.exists({ email: email });

    if (!exists) {
      const doc = new User({
        google_id: googleId,
        email: email,
        full_name: fullName,
      });

      console.log(doc);

      const saved = doc.save();
      res.send("User created");
    } else {
      res.send("User already exists");
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = userRouter;
