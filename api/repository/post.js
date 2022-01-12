const { Post } = require("../models/post");

async function update(id, data) {
  return Post.findOneAndUpdate(id, data);
}

async function remove(id) {
  return Post.deleteOne({ _id: id });
}

async function add(data) {
  return Post.create(data);
}
module.exports = {
  update,
  remove,
  add,
};
