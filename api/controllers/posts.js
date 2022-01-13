const {
  updatePost,
  removePost,
  addPost,
  getAllPostsWithAuthor,
  getOnePostWithAuthor,
} = require("../services/posts");

async function getPosts(req, res) {
  try {
    const result = await getAllPostsWithAuthor();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function getPost(req, res) {
  try {
    const id = req.params.id;
    const result = await getOnePostWithAuthor(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function postPost(req, res) {
  try {
    const data = req.body;
    const result = await addPost(data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(req, res) {
  try {
    const id = req.params.id;
    const result = await removePost(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function patchPost(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await updatePost(id, data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getPosts,
  getPost,
  postPost,
  deletePost,
  patchPost,
};
