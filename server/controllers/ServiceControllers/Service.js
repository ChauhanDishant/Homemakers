const serviceModel = require("./../../models/ServiceModels/serviceModels");
const user = require("./../../models/UserModels/userModels");
const { validationResult } = require("express-validator");

// Add the Service Form Method
const serviceForm = async (req, res) => {
  try {
    // Validate the incoming request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return validation errors as a response
      return res.status(400).send({
        errors: errors
          .array()
          .map((err) => ({ field: err.param, message: err.msg })),
        success: false,
      });
    }

    // Assuming req.user is populated with the authenticated user's details
    const userId = req.user._id;
    if (!userId) {
      return res
        .status(401)
        .send({ message: "User not found", success: false });
    }

    // Check for duplicate service entries for the same day and time
    const existingService = await serviceModel.findOne({
      user: userId,
      serviceDate: req.body.serviceDate,
      serviceTime: req.body.serviceTime,
    });

    if (existingService) {
      return res.status(400).send({
        message: "Duplicate service entry exists for the same day and time.",
        success: false,
      });
    }

    // Create a new service form document
    const newServiceForm = new serviceModel({
      customername: req.body.customername,
      customeremail: req.body.customeremail,
      customerphone1: req.body.customerphone1,
      customerphone2: req.body.customerphone2, // Assuming phone2 can be empty
      selectedCity: req.body.selectedCity,
      area: req.body.area,
      customeraddress: req.body.customeraddress,
      serviceCharge: req.body.serviceCharge,
      serviceDate: req.body.serviceDate,
      serviceTime: req.body.serviceTime,
      serviceType: req.body.serviceType,
      cart: req.body.cart || [],
      user: userId, // Reference to the user who submitted the form
    });

    // Save the new service form to the database
    await newServiceForm.save();

    // Return success response with the created service
    return res.status(201).send({
      message: "Service form submitted successfully",
      success: true,
      service: newServiceForm,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ message: "Internal Server Error", success: false });
  }
};

module.exports = serviceForm;
