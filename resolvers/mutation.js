const Mutation = {

    // Post CRUD operations
    addPost: (_, input, context) => {
      return context.dataSources.post.create(input);
    },

    deletePost: (_, {postId}, context) => {
        return context.dataSources.post.deletePost(postId)
    },

    updatePost: (_, {postId, data}, context) => {
        return context.dataSources.post.updatePost(postId, data);
    },
  };
  module.exports = Mutation;