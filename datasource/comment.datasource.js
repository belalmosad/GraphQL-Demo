const { DataSource } = require('apollo-datasource');
const Comment = require('../model/comment.model');

class CommentDataSource extends DataSource {
    initialize(config) {
        this.context = config.context;
    }
    create(input) {
        return Comment.create(input);
    }
    async getCommentsByPostId(postId) {
        const comments = await Comment.find({ postId });
        return comments;
    }
    async deleteComment(commentId, postID) {
        return Comment.deleteOne({ id: commentId, postId: postID })
    }
    async updateComment(commentId, postId, data) {
        return Comment.updateOne({ id: commentId, postId: postId }, { $set: {data} })
    }
}

module.exports = CommentDataSource;
