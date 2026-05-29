const prisma = require("../config/db");

/* =========================
   GET ALL EMPLOYEES
========================= */
exports.getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: {
        id: "desc",
      },
    });

    res.json(employees);
  } catch (error) {
    console.error("GET EMPLOYEES ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   CREATE EMPLOYEE
========================= */
exports.createEmployee = async (req, res) => {
  try {
    const {
      fullName,
      email,
      country,
      department,
      jobTitle,
      salary,
      joiningDate,
      status,
    } = req.body;

    const employee = await prisma.employee.create({
      data: {
        fullName,
        email,
        country,
        department,
        jobTitle,
        salary: Number(salary),
        joiningDate: joiningDate
          ? new Date(joiningDate)
          : null,
        status,
      },
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error("CREATE EMPLOYEE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   UPDATE EMPLOYEE
========================= */
exports.updateEmployee = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid employee ID",
      });
    }

    const {
      fullName,
      email,
      country,
      department,
      jobTitle,
      salary,
      joiningDate,
      status,
    } = req.body;

    const employee = await prisma.employee.update({
      where: { id },
      data: {
        fullName,
        email,
        country,
        department,
        jobTitle,
        salary: salary
          ? Number(salary)
          : undefined,
        joiningDate: joiningDate
          ? new Date(joiningDate)
          : undefined,
        status,
      },
    });

    res.json({
      message: "Employee updated successfully",
      data: employee,
    });

  } catch (error) {
    console.error("UPDATE EMPLOYEE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   DELETE EMPLOYEE
========================= */
exports.deleteEmployee = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid employee ID",
      });
    }

    await prisma.employee.delete({
      where: { id },
    });

    res.json({
      message: "Employee deleted successfully",
    });

  } catch (error) {
    console.error("DELETE EMPLOYEE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   SALARY INSIGHTS
========================= */
exports.getSalaryInsights = async (req, res) => {
  try {
    const employees =
      await prisma.employee.findMany();

    const totalEmployees =
      employees.length;

    if (totalEmployees === 0) {
      return res.json({
        totalEmployees: 0,
        averageSalary: 0,
        maxSalary: 0,
        minSalary: 0,
      });
    }

    const salaries =
      employees.map((e) => e.salary);

    const total =
      salaries.reduce((sum, s) => sum + s, 0);

    const averageSalary =
      total / totalEmployees;

    const maxSalary =
      Math.max(...salaries);

    const minSalary =
      Math.min(...salaries);

    res.json({
      totalEmployees,
      averageSalary:
        averageSalary.toFixed(2),
      maxSalary,
      minSalary,
    });

  } catch (error) {
    console.error(
      "SALARY INSIGHTS ERROR:",
      error
    );

    res.status(500).json({
      message: error.message,
    });
  }
};