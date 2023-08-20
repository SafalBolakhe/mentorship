const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilepic: {
      type: String,
      required: false,
      default: "",
    },
    email: {
      type: String,
      required: false,
      default: "",
    },
    birthdate: {
      type: Date,
      required: true,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
