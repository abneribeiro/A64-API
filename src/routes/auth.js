const express = require("express");
const authControllers = require('../controllers/authController')
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
  authControllers.register
);

router.post("/login", authControllers.loginUSer);

router.delete("/delete/:id", authControllers.deleteUser );

module.exports = router;
