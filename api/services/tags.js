const { getAll, getOne, update, remove, add } = require("../repository/tag");

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
  return add(data);
}

module.exports = {
  getAllTags,
  getOneTag,
  updateTag,
  removeTag,
  addTag,
};
