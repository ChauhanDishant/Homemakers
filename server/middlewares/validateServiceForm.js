const { check, validationResult } = require("express-validator");

// Validation rules for the service form
const validateServiceForm = [
  check("customername")
    .trim()
    .notEmpty()
    .withMessage("Customer Name is required")
    .isLength({ min: 2 })
    .withMessage("Customer Name must be at least 2 characters long"),

  check("customeremail").isEmail().withMessage("Valid email is required"),

  check("customerphone1")
    .isMobilePhone()
    .withMessage("Valid Customer Phone 1 is required"),

  check("customerphone2")
    .optional() // Make it optional if it's not required
    .isMobilePhone()
    .withMessage("Valid Customer Phone 2 is required"),

  check("selectedCity").notEmpty().withMessage("Selected City is required"),

  check("area").notEmpty().withMessage("Area is required"),

  check("customeraddress")
    .notEmpty()
    .withMessage("Customer Address is required"),

  check("serviceDate").isISO8601().withMessage("A valid date is required"),
];

module.exports = validateServiceForm;
