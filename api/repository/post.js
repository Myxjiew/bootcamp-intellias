const { Post } = require("../models/post");
const { User } = require("../models/user");

async function getAll() {
  const res = await Post.find({}).populate("tags", "tagName -_id").populate({
    path: "author",
    model: User,
    select: "firstName lastName -_id",
  });
  return res;
}

async function getOne(id) {
  const res = await Post.find({ _id: id })
    .populate("tags", "tagName -_id")
    .populate({
      path: "author",
      model: User,
      select: "firstName lastName -_id",
    });
  return res[0];
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
