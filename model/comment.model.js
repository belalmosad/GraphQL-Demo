const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({

    id: {
        type: Number,
        unique: true
    },
    postId: Number,
    content: String
});

module.exports = mongoose.model('comments', commentSchema);