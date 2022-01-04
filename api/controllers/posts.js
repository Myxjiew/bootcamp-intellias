const { Post } = require("../models/post.js");
const { Comment } = require("../models/comment.js");

async function getAllPosts() {
  return Post.find({});
}

async function addPost(data) {
  await Post.create(data);
  return {
    status: 200,
  };
}

async function removePost(id) {
  await Post.remove({ _id: id });
  await Comment.find({ post: id }).remove({});
  return {
    status: 200,
  };
}

async function updatePost(id, data) {
  await Post.findByIdAndUpdate(id, data);
  return {
    status: 200,
  };
}

module.exports = {
  getAllPosts,
  addPost,
  removePost,
  updatePost,
};
