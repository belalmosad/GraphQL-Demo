const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    postId: Number,
    content: String
});

module.exports = mongoose.model('comments', commentSchema);