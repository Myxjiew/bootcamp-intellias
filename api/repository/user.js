const { User } = require("../models/user");

async function getAll() {
  return User.find({});
}

async function getOne(id) {
  return User.findOne({ _id: id });
}

async function remove(id) {
  return User.deleteOne({ _id: id });
}

async function add(data) {
  return User.create(data);
}

async function update(id, data) {
  return User.findOneAndUpdate(id, data);
}

async function getAllWithinArray(userIds) {
  return User.find({ _id: { $in: userIds } }).lean();
}

async function getOneAuthor(post) {
  return User.findOne({ _id: post.author });
}

module.exports = {
  getAll,
  getAllWithinArray,
  getOne,
  getOneAuthor,
  remove,
  add,
  update,
};
