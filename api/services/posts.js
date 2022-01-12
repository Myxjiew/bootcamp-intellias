const { update, remove, add } = require("../repository/post");

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
  updatePost,
  removePost,
  addPost,
};
