const mongoose = require("mongoose");
const moment = require("moment");

const currentDate = moment();
const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dateCriacao: { type: Date, default: formattedDate },
});

module.exports = mongoose.model("Post", postSchema);
