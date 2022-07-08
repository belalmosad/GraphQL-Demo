const { DataSource } = require("apollo-datasource");
const Post = require("../model/post.model");

class PostDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }
  create(input) {
    return Post.create(input);
  }
  async getAllPosts() {
    return Post.find();
  }
  async getPostById(postId) {
    return Post.findOne({id: postId});
  }
  async deletePost(postId) {
    return Post.deleteOne({id: postId});
  }
  async updatePost(postId, data) {
    return Post.updateOne({id: postId}, {$set: {data}})
  }
}

module.exports = PostDataSource;