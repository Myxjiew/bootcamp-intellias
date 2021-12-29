const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema(
  {
    author: {
      type: String,
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

    likes: {
      type: Number,
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],

    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports.Post = mongoose.model("Post", postSchema);