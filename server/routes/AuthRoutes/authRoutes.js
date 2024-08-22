const express = require("express");
const router = express.Router();
const {
  signupController,
  loginController,
} = require("./../../controllers/UserControllers/User");
const { authMiddleware } = require("./../../middlewares/authMiddleware");

// POST || Add the User
router.post("/signup", signupController);

// GET || Login the User
router.post("/login", loginController);

module.exports = router;
