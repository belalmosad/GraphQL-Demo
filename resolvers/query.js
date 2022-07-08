const Query = {
    posts: (_, args, context) => {
      return context.dataSources.post.getAllPosts();
    },
    comments: (_, { postId }, context) => {
      return context.dataSources.comment.getCommentsByPostId(postId);
    },
    post: (_args, {postId}, context) => {
        return context.dataSources.post.getPostById(postId);
    }
  };
  module.exports = Query;