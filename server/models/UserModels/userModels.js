const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: ["Firstname is required", true],
  },
  lastname: {
    type: String,
    required: ["Last Name is required", true],
  },
  email: {
    type: String,
    required: ["Email is required", true],
  },
  password: {
    type: String,
    required: ["Password is required", true],
  },
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
