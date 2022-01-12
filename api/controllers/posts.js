const { Post } = require("../models/post.js");
const { User } = require("../models/user.js");
const { updatePost, removePost, addPost } = require("../services/posts");

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

async function postPost(req, res) {
  try {
    const data = req.body;
    const result = await addPost(data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(req, res) {
  try {
    const id = req.params.id;
    const result = await removePost(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function patchPost(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await updatePost(id, data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getPosts,
  getPost,
  postPost,
  deletePost,
  patchPost,
};
