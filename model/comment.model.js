const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({

    id: {
        type: String,
        unique: true
    },
    postId: String,
    content: String
});

module.exports = mongoose.model('comments', commentSchema);