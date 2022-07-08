const Post = {
    id: (parent) => {
      return parent._id;
    },
    comments: (parent, args, context) => {
      const postId = parent._id;
      return context.dataSources.comment.getCommentsByPostId(postId);
    },
  };
  
  module.exports = Post;