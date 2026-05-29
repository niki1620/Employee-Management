const express = require("express");
const router = express.Router();

const {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getSalaryInsights,
} = require("../controllers/employeeController");

// NO AUTH - PURE CRUD

router.get("/", getEmployees);

router.post("/", createEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

router.get("/insights/salary", getSalaryInsights);

module.exports = router;
