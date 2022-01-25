const { Post } = require("../models/post");

async function getAll() {
  return Post.find({}).lean();
}

async function getOne(id) {
  return Post.findOne({ _id: id }).lean();
}

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
  getAll,
  getOne,
  update,
  remove,
  add,
};
