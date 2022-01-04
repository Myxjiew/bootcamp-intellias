const { User } = require("../models/user.js");
const { Comment } = require("../models/comment.js");
const mongoose = require("mongoose");
const session = await mongoose.startSession();

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
  await session.withTransaction(async () => {
    await User.remove({ _id: id });
    await Comment.find({ post: id }).remove({});
  });
  await session.abortTransaction();
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
