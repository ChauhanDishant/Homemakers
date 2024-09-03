const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: ["Firstname is required", true],
  },
  email: {
    type: String,
    required: ["Last Name is required", true],
  },
  phonenumber: {
    type: Number,
    required: ["Email is required", true],
  },
  password: {
    type: String,
    required: ["Password is required", true],
  },
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
