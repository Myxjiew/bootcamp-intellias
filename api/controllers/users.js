const { User } = require("../models/user.js");
const { Comment } = require("../models/comment.js");

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
    await User.remove({ _id: id });
    await Comment.find({ post: id }).remove({});
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
