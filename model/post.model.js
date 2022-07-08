const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    id: {
        type: Number,
        unique: true
    },
    title: String,
    content: String,
  }
);

module.exports = mongoose.model("posts", postSchema);