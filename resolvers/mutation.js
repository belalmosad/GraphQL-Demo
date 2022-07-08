const Mutation = {

    // Post CRUD operations
    addPost: (_, input, context) => {
        return context.dataSources.post.create(input);
    },

    deletePost: async (_, { id }, context) => {
        await context.dataSources.post.deletePost(id)
        return context.dataSources.post.getAllPosts();
    },

    updatePost: async (_, { id, title, content }, context) => {
        await context.dataSources.post.updatePost(id, title, content);
        const postAfterUpdate = await context.dataSources.post.getPostById(id);
        return postAfterUpdate;
    },

    // Comment CRUD operations
    addComment: (_, input, context) => {
        return context.dataSources.comment.create(input);
    },
    deleteComment: async (_, {id, postId}, context) => {
        await context.dataSources.comment.deleteComment(id, postId);
        const remainingCommentsAfterDelete = await context.dataSources.comment.getCommentsByPostId(postId);
        return remainingCommentsAfterDelete;
    },
    updateComment: async (_, {id, postId, content}, context) => {
        await context.dataSources.comment.updateComment(id, postId, content);
        const commentAfterUpdate = context.dataSources.comment.getComment(id, postId);
        return commentAfterUpdate;
    }

};
module.exports = Mutation;