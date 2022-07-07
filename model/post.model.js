const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
  }
);

module.exports = mongoose.model("posts", postSchema);