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

// ver uma forma de converter o title em lowecase antes de consultar o banco de dados
postSchema.pre("save", async function (next) {
  this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1)
  next();
});


module.exports = mongoose.model("Post", postSchema);
