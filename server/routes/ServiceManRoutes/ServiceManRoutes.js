const express = require("express");
const authMiddleware = require("./../../middlewares/authMiddleware");
const validateServiceForm = require("./../../middlewares/validateServiceForm");
const serviceController = require("./../../controllers/ServiceControllers/Service");
const router = express.Router();

// POST Method || Setup the Form
router.post("/service", authMiddleware, validateServiceForm, serviceController);

module.exports = router;
