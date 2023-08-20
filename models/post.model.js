const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    content: {
      type: String,
    },
    comments: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Users",
        },
        content: {
          type: String,
        },
        createdAt: {
          type: Date,
          required: true,
        },
      },
    ],
    createdAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Posts", userSchema);
