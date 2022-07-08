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
    const posts = await Post.find();
    return posts;
  }
}

module.exports = PostDataSource;