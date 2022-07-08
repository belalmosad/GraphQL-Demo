const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    content: String,
  }
);

module.exports = mongoose.model("posts", postSchema);