const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
require("dotenv").config();
const app = express();

app.use(cors());

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database: " + mongoose.connection.name);
  })
  .catch((err) => console.error(err));

app.listen(PORT, function () {
  console.log("Server is listening on Port: " + PORT);
});
