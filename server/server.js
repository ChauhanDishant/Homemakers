const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    optionSuccessStatus: 200,
  })
);

// ************************* dotenv config *****************************
dotenv.config();

// ************************* dotenv config *****************************
dotenv.config();

// ************************* connection Initialized ********************
const connectDB = require("./config/db");
connectDB();

// ************************* middlewares *******************************
app.use(express.json());
app.use(morgan("dev")); // -- app engine

// ************************** routes *****************************

// ---------------------- Authentication Routes
app.use("/homemakers", require("./routes/AuthRoutes/authRoutes"));

// PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      `Server is Successfully Running on ${process.env.NODE_MODE} environment, and App is listening on PORT ${PORT}`
        .bgCyan.white
    );
  } else {
    console.log(`Server issue on Project`.bgRed.white);
  }
});
