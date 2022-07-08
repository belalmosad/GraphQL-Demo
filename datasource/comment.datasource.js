const { DataSource } = require('apollo-datasource');
const Comment = require('../model/comment.model');

class CommentDataSource extends DataSource {
    initialize(config) {
        this.context = config.context;
    }
    create(input) {
        return Comment.create(input);
    }
    async getComment (id, postId) {
        const comments = await Comment.find({postId});
        return comments.find((comment) => {return comment.id == id});
    }
    async getCommentsByPostId(postId) {
        const comments = await Comment.find({ postId });
        return comments;
    }
    async deleteComment(commentId, postID) {
        return Comment.deleteOne({ id: commentId, postId: postID })
    }
    async updateComment(commentId, postId, content) {
        return Comment.updateOne({ id: commentId, postId: postId }, { $set: {content} })
    }
}

module.exports = CommentDataSource;
