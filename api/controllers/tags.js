const { Tag } = require("../models/tag.js");

async function getAllTags() {
  try {
    return Tag.find({});
  } catch (error) {
    console.log(error);
  }
}

async function addTag(data) {
  try {
    const tag = new Tag({
      tagName: data.tagName,
      post: req.body.posts || [],
    });
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

async function removeTag(id) {
  try {
    await Tag.remove({ _id: Tag._id });
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllTags,
  addTag,
  removeTag,
};
