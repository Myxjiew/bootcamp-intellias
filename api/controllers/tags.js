const {
  getAllTags,
  getOneTag,
  updateTag,
  addTag,
  removeTag,
} = require("../services/tags");
const { Tag } = require("../models/tag.js");

async function getTags(req, res) {
  try {
    const result = await getAllTags();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function getTag(req, res) {
  try {
    const id = req.params.id;
    const result = await getOneTag();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function postTag(req, res) {
  try {
    const data = req.body;
    const result = await addTag(data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function patchTag(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await updateTag(id, data);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function deleteTag(req, res) {
  try {
    const id = req.params.id;
    const result = await removeTag(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getTags,
  getTag,
  postTag,
  patchTag,
  deleteTag,
};
