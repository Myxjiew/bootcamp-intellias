const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema({
  author: [
    {
      ref: "User",
      type: Schema.Types.ObjectId,
      required: true,
    },
  ],

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
});

module.exports.Post = mongoose.model("Post", postSchema);
