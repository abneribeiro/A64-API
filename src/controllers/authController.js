const jwt = require("jsonwebtoken");
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
    const { username, email, password } = req.body;

    const userNameLower = username.toLowerCase();
    const user = await User.findOne({ username: userNameLower });
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      res.status(401).json({ error: "Invalid credentials." });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Failed to authenticate user." });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user." });
  }
};
