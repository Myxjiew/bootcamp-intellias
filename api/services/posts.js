const { getAll, getOne, update, remove, add } = require("../repository/post");
const { getAllWithinArray, getOneAuthor } = require("../repository/user");

async function getAllPosts() {
  return getAll();
}

async function getAllPostsWithAuthor() {
  const posts = await getAll();
  const userIds = posts.map((el) => el.author);
  const users = await getAllWithinArray(userIds);
  const result = posts.map((el) => {
    const user = users.find((item) => item._id.valueOf() === el.author);
    if (user) {
      return { ...el, firstName: user.firstName, lastName: user.lastName };
    } else {
      return el;
    }
  });
  return result;
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
  getAllPostsWithAuthor,
  getOnePost,
  getOnePostWithAuthor,
  updatePost,
  removePost,
  addPost,
};
