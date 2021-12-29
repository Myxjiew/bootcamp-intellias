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
    favorites: {
      type: [String],
    },
  },
  {
    versionKey: false,
  }
);

module.exports.User = mongoose.model("User", userSchema);
