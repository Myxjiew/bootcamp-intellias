const mongoose = require("mongoose");
const { Post } = require("../models/post.js");
const { Comment } = require("../models/comment.js");

async function getComments() {
  try {
    return Comment.find({});
  } catch (error) {
    console.log(error);
  }
}

async function getComment(id) {
  try {
    return Comment.findOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
}

async function addComment(data) {
  try {
    const comment = new Comment({
      author: new mongoose.Types.ObjectId(data.userId),
      post: new mongoose.Types.ObjectId(data.postId),
      text: data.text,
    });

    await Post.updateOne(
      { _id: comment.post },
      { $push: { comments: comment._id } }
    );

    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

async function updateComment(id, data) {
  try {
    await Comment.findOneAndUpdate(id, data);

    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

async function removeComment(id) {
  try {
    const comment = await Comment.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    await Post.updateOne(
      { _id: comment.post },
      { $pull: { comments: comment._id } }
    );

    await Comment.deleteOne({ _id: comment._id });

    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getComments,
  getComment,
  addComment,
  updateComment,
  removeComment,
};
