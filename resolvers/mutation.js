const Mutation = {

    // Post CRUD operations
    addPost: (_, input, context) => {
        return context.dataSources.post.create(input);
    },

    deletePost: (_, { postId }, context) => {
        return context.dataSources.post.deletePost(postId)
    },

    updatePost: (_, { postId, data }, context) => {
        return context.dataSources.post.updatePost(postId, data);
    },

    // Comment CRUD operations
    addComment: (_, input, context) => {
        return context.dataSources.comment.create(input);
    },
    deleteComment: (_, {commentId, postId}, context) => {
        return context.dataSources.comment.deleteComment(commentId, postId);
    },
    updateComment: (_, {commentId, postId, data}, context) => {
        return context.dataSources.comment.updateComment(commentId, postId, data)
    }

};
module.exports = Mutation;