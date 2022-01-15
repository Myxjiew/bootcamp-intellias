const { getAll, getOne, update, remove, add } = require("../repository/post");

async function getAllPosts() {
  return getAll();
}

async function getOnePost(id) {
  return getOne(id);
}

async function updatePost(id, data) {
  return update(id, data);
}

async function removePost(id) {
  return remove(id);
}

async function addPost(data) {
  return add(data);
}

module.exports = {
  getAllPosts,
  getOnePost,
  updatePost,
  removePost,
  addPost,
};
