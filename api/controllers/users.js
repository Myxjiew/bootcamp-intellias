const { User } = require("../models/user.js");
const { Comment } = require("../models/comment.js");

async function getAllUsers() {
  return User.find({});
}

async function addUser(dataUser) {
  await User.create(dataUser);
  return {
    status: 200,
  };
}

async function updateUser(id, dataUser) {
  await User.findByIdAndUpdate(id, dataUser);
  return {
    status: 200,
  };
}

async function removeUser(id) {
  await User.remove({ _id: id });
  await Comment.find({ post: id }).remove({});
  return {
    status: 200,
  };
}

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  removeUser,
};
