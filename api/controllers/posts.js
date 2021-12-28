const { Post } = require("../models/post.js");
const { Comment } = require("../models/comment.js");
const { User } = require("../models/user.js");

async function getAllPosts() {
  let posts = await Post.find({}).lean();
  const userIds = posts.map((el) => el.author);
  const users = await User.find({ _id: { $in: userIds } }).lean();
  posts = posts.map((el) => {
    const user = users.find((item) => item._id.valueOf() === el.author);
    if (user) {
      return { ...el, firstName: user.firstName, lastName: user.lastName };
    } else {
      return el;
    }
  });
  return posts;
}

async function addPosts(data) {
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
  addPosts,
  removePost,
  updatePost,
};
