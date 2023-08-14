const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    const user = new User({ username, email, password });

    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to register user." });
    console.log(error);
  }
};

exports.loginUSer = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username.toLowerCase() });
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      res.status(401).json({ error: "Invalid credentials." });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Failed to authenticate user." });
    console.log(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.userId;
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email, newPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "user not found" });
    }

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating the user." });
    console.log(error)
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user." });
  }
};
