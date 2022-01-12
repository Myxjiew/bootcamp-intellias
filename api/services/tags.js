const { getAll, getOne, update, remove, add } = require("../repository/tag");
const { Tag } = require("../models/tag");

async function getAllTags() {
  return getAll();
}
async function getOneTag(id) {
  return getOne(id);
}
async function updateTag(id, data) {
  return update(id, data);
}
async function removeTag(id) {
  return remove(id);
}
async function addTag(data) {
  const tag = new Tag({
    tagName: data.tagName,
    posts: [],
  });
  return add(tag);
}

module.exports = {
  getAllTags,
  getOneTag,
  updateTag,
  removeTag,
  addTag,
};
