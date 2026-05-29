const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Root route (FIX)
app.get("/", (req, res) => {
  res.send("Employee Management API is running 🚀");
});

// API routes
app.use("/api/employees", employeeRoutes);

module.exports = app;