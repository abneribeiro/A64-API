const express = require("express");
const userControllers = require('../controllers/userController')
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  [
    body("username")
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long."),
    body("email").isEmail().withMessage("Invalid email address."),
    body("password").isStrongPassword().withMessage("Password must be strong."),
  ],
  userControllers.register
);

router.post("/login", userControllers.loginUSer);

router.delete("/delete/:id", userControllers.deleteUser );

module.exports = router;
