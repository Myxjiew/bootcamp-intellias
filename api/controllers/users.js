const { User } = require("../models/user.js");
const { Comment } = require("../models/comment.js");
const mongoose = require("mongoose");
const session = mongoose.startSession();

async function getAllUsers() {
  try {
    return User.find({});
  } catch (error) {
    console.log(error);
  }
}

async function addUser(dataUser) {
  try {
    await User.create(dataUser);
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(id, dataUser) {
  try {
    await User.findOneAndUpdate(id, dataUser);
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

async function removeUser(id) {
  try {
    await session.withTransaction(async () => {
      await User.remove({ _id: id });
      await Comment.find({ post: id }).remove({});
    });
    await session.abortTransaction();
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  removeUser,
};
