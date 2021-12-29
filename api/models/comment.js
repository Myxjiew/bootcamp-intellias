const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    post: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports.Comment = mongoose.model("Comment", commentSchema);
