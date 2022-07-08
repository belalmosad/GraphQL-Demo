const Query = {
    posts: (_, args, context) => {
      return context.dataSources.posts.getAllPosts();
    },
    comments: (_, { postId }, context) => {
      return context.dataSources.comments.getCommentsByPostId(postId);
    },
    post: (_args, {postId}, context) => {
        return context.dataSources.posts.getPostById(postId);
    }
  };
  module.exports = Query;