const { Post } = require("../models/post");
const { User } = require("../models/user");

async function getAll(queryTags) {
  if (queryTags) {
    return Post.aggregate([
      {
        $lookup: {
          from: "tags",
          localField: "tags",
          foreignField: "_id",
          as: "tags",
        },
      },
      {
        $match: {
          "tags.tagName": queryTags,
        },
      },
    ]);
  } else {
    return Post.find({}).populate("tags", "tagName -_id").populate({
      path: "author",
      model: User,
      select: "firstName lastName",
    });
  }
}

async function getOne(id) {
  return Post.findOne({ _id: id }).populate("tags", "tagName -_id").populate({
    path: "author",
    model: User,
    select: "firstName lastName",
  });
}

async function update(id, data) {
  return Post.findOneAndUpdate(id, data);
}

async function remove(id) {
  return Post.deleteOne({ _id: id });
}

async function add(data) {
  return Post.create(data);
}
module.exports = {
  getAll,
  getOne,
  update,
  remove,
  add,
};
