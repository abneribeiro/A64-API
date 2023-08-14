const express = require("express");
const userControllers = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
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

router.put(
  "/:id",
  [
    body("username")
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long."),
    body("email").isEmail().withMessage("Invalid email address."),
    body("password").isStrongPassword().withMessage("Password must be strong."),
  ],
  authMiddleware,
  userControllers.updateUser
);
// testar se este middleware funciona
router.delete("/:id", authMiddleware, userControllers.deleteUser);

module.exports = router;
