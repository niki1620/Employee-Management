const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://employee-management-5jmacl94h-nikitha-s-s-projects.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Employee Management API is running 🚀");
});

// API routes
app.use("/api/employees", employeeRoutes);

module.exports = app;