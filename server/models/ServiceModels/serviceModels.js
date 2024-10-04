const mongoose = require("mongoose");

// Define schema for each cart item
const cartItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Item name is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Item quantity is required"],
    min: 1,
  },
  price: {
    type: Number,
    required: [true, "Item price is required"],
  },
});

const serviceSchema = new mongoose.Schema({
  customername: {
    type: String,
    required: [true, "Customer Name is required"],
  },
  customeremail: {
    type: String,
    required: [true, "Customer Email is required"],
  },
  customerphone1: {
    type: Number,
    required: [true, "Customer Phone 1 is required"],
  },
  customerphone2: {
    type: Number,
    required: [true, "Customer Phone 2 is required"],
  },
  selectedCity: {
    type: String,
    required: [true, "Selected City is required"],
  },
  area: {
    type: String,
    required: [true, "Area is required"],
  },
  customeraddress: {
    type: String,
    required: [true, "Customer Address is required"],
  },
  serviceCharge: {
    type: String,
    required: [true, "Service Charge is required"],
  },
  serviceDate: {
    type: String,
    required: [true, "Date is required"],
  },
  serviceTime: {
    type: String,
    required: [true, "Service Time is required"],
  },
  serviceType: {
    type: String,
    required: [true, "Service Type is required"],
  },
  cart: {
    type: [cartItemSchema], 
    default: [], 
  },
  // Reference to the User model
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users", // This refers to the User model
    required: [true, "User reference is required"],
  },
});

const serviceModel = mongoose.model("Service", serviceSchema);

module.exports = serviceModel;
