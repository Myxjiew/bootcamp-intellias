const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    login: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    likedComments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likedPosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likedComments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likedPosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports.User = mongoose.model("User", userSchema);
