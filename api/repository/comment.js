const { Comment } = require("../models/comment");
const { Post } = require("../models/post");

async function getAll() {
  return Comment.find({});
}

async function getOne(id) {
  return Comment.findOne({ _id: id });
}

async function update(id, data) {
  return Comment.findOneAndUpdate(id, data);
}

async function remove(comment) {
  return Comment.deleteOne({ comment: comment._id });
}

async function add(comment) {
  return Post.updateOne(
    { _id: comment.post },
    { $push: { comments: comment._id } }
  );
}

module.exports = {
  getAll,
  getOne,
  remove,
  add,
  update,
};
