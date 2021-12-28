const { Tag } = require("../models/tag.js");

async function getAllTags() {
  return Tag.find({});
}

async function addTag(data) {
  const tag = new Tag({
    tagName: data.tagName,
    post: [],
  });
  return {
    status: 200,
  };
}

async function removeTag(id) {
  await Tag.remove({ _id: Tag._id });
  return {
    status: 200,
  };
}

module.exports = {
  getAllTags,
  addTag,
  removeTag,
};
