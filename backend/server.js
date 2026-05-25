require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error");
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`App Started on port ${PORT}`);
});