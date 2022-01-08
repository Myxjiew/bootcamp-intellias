const { Post } = require("../models/post.js");
const { Comment } = require("../models/comment.js");
const { User } = require("../models/user.js");

async function getPosts() {
  try {
    const posts = await Post.find({}).lean();
    const userIds = posts.map((el) => el.author);
    const users = await User.find({ _id: { $in: userIds } }).lean();
    const result = posts.map((el) => {
      const user = users.find((item) => item._id.valueOf() === el.author);
      if (user) {
        return { ...el, firstName: user.firstName, lastName: user.lastName };
      } else {
        return el;
      }
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getPost(id) {
  try {
    const post = await Post.findOne({ _id: id }).lean();
    if (post) {
      const user = await User.findOne({ _id: post.author });
      if (user) {
        return {
          ...post,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function addPost(data) {
  try {
    await Post.create(data);
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

async function removePost(id) {
  try {
    await Post.deleteOne({ _id: id });
    await Comment.find({ post: id }).deleteOne({});
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

async function updatePost(id, data) {
  try {
    await Post.findOneAndUpdate(id, data);
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  removePost,
  updatePost,
};
