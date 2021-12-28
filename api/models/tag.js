const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = Schema({
  tagName: {
    type: String,
    required: true,
  },

  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  ],
});

module.exports.Tag = mongoose.model("Tag", likeSchema);
