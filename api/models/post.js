const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema(
  {
    author: {
      ref: "User",
      type: Schema.Types.ObjectId,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    likes: [
      {
        ref: "User",
        type: Schema.Types.ObjectId,
        required: true,
      },
    ],

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],

    tags: [
      {
        type: String,
        required: true,
        unique: true,
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports.Post = mongoose.model("Post", postSchema);
