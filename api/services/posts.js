const { getAll, getOne, update, remove, add } = require("../repository/post");

async function getAllPosts(queryTags) {
  return getAll(queryTags);
}

async function getOnePost(id) {
  return getOne(id);
}

async function getOnePostWithAuthor(id) {
  const post = await getOne(id);
  if (post) {
    const user = await getOneAuthor(post);
    if (user) {
      return {
        ...post,
        firstName: user.firstName,
        lastName: user.lastName,
      };
    }
  }
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
