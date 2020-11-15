const express = require('express');
const userRouter = express.Router();

let User = require('../models/user.model');

userRouter.post('/login', async (req, res, next) => {
  try {
    const googleId = req.body.googleId;
    const email = req.body.email;
    const fullName = req.body.name;

    const exists = await User.exists({ email: email });

    if (!exists) {
      const doc = new User({
        google_id: googleId,
        email: email,
        full_name: fullName,
      });

      const saved = doc.save();
      return res.json({ message: 'User created' });
    } else {
      return res.json({ message: 'User already exists' });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = userRouter;
