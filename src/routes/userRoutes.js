const express = require("express");
const { body } = require("express-validator");

// Dependency Injection
const createRouter = (userControllers, authMiddleware, validateMiddleware) => {
  const router = express.Router();

  router.post(
    "/register",
    validateMiddleware([
      body("username")
        .isLength({ min: 5 })
        .withMessage("Username must be at least 5 characters long."),
      body("email").isEmail().withMessage("Invalid email address."),
      body("password").isStrongPassword().withMessage("Password must be strong."),
    ]),
    userControllers.register
  );

  router.post("/login", userControllers.loginUser);

  router.put(
    "/profile",
    validateMiddleware([
      body("username")
        .isLength({ min: 5 })
        .withMessage("Username must be at least 5 characters long."),
      body("email").isEmail().withMessage("Invalid email address."),
      body("password").isStrongPassword().withMessage("Password must be strong."),
    ]),
    authMiddleware,
    userControllers.updateUser
  );

  router.delete("/profile", authMiddleware, userControllers.deleteUser);

  return router;
};

module.exports = createRouter;