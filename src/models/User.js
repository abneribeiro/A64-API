const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const moment = require("moment");

const currentDate = moment();
const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss");
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  dateCriacao: { type: Date, default: formattedDate },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.username = this.username.toLowerCase();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
