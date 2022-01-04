const mongoose = require("mongoose");
const { Schema } = mongoose;

const tagSchema = Schema(
  {
    tagName: {
      type: String,
      required: true,
      unique: true,
    },
    posts: [
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

module.exports.Tag = mongoose.model("Tag", tagSchema);
