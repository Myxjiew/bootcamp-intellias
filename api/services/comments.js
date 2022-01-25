const {
  getAll,
  getOne,
  update,
  remove,
  add,
} = require("../repository/comment");
const { Comment } = require("../models/comment");
const mongoose = require("mongoose");

async function getAllComments() {
  return getAll();
}

async function getOneComment(id) {
  return getOne(id);
}

async function updateComment(id, data) {
  return update(id, data);
}

async function removeComment(id) {
  const comment = await Comment.findOne({
    _id: new mongoose.Types.ObjectId(id),
  });
  return remove(comment);
}

async function addComment(data) {
  const comment = new Comment({
    author: new mongoose.Types.ObjectId(data.userId),
    post: new mongoose.Types.ObjectId(data.postId),
    text: data.text,
  });
  return add(comment);
}

module.exports = {
  getAllComments,
  getOneComment,
  updateComment,
  removeComment,
  addComment,
};
