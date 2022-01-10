const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },

    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports.Comment = mongoose.model("Comment", commentSchema);
