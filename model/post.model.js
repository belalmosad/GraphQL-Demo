const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    id: {
        type: String,
        uniqie: true
    },
    title: String,
    content: String,
  }
);

module.exports = mongoose.model("posts", postSchema);