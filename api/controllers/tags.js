const { Tag } = require("../models/tag.js");

async function getTags() {
  try {
    return Tag.find({});
  } catch (error) {
    console.log(error);
  }
}

async function getTag(id) {
  try {
    return Tag.find({ _id: id });
  } catch (error) {
    console.log(error);
  }
}

async function addTag(data) {
  try {
    const tag = new Tag({
      tagName: data.tagName,
      posts: [],
    });
    return Tag.create(tag);
  } catch (error) {
    console.log(error);
  }
}

async function updateTag(id, data) {
  try {
    await Tag.findOneAndUpdate(id, data);
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

async function removeTag(id) {
  try {
    await Tag.deleteOne({ _id: id });
    return {
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getTags,
  getTag,
  addTag,
  updateTag,
  removeTag,
};
