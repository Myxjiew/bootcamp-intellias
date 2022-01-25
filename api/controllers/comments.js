const {
  getAllComments,
  getOneComment,
  updateComment,
  addComment,
  removeComment,
} = require("../services/comments");

async function getComments(req, res) {
  try {
    const result = await getAllComments();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function getComment(req, res) {
  try {
    const id = req.params.id;
    const result = await getOneComment(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function postComment(req, res) {
  try {
    const data = req.body;
    const result = await addComment(data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function patchComment(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await updateComment(id, data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function deleteComment(req, res) {
  try {
    const id = req.params.id;
    const result = await removeComment(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getComments,
  getComment,
  postComment,
  patchComment,
  deleteComment,
};
