const prisma = require("../config/db");

exports.getEmployees = async (req, res) => {
  try {
    const employees =
      await prisma.employee.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    res.json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createEmployee = async (
  req,
  res
) => {
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

    const employee =
      await prisma.employee.create({
        data: {
          fullName,
          email,
          country,
          department,
          jobTitle,
          salary: Number(salary),
          joiningDate: new Date(
            joiningDate
          ),
          status,
        },
      });

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const { fullName, jobTitle, country, salary } = req.body;

    const employee = await prisma.employee.update({
      where: { id },
      data: {
        fullName,
        jobTitle,
        country,
        salary: salary ? Number(salary) : 0,
      },
    });

    res.json({
      message: "Employee updated successfully",
      data: employee,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteEmployee = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    await prisma.employee.delete({
      where: {
        id: id,
      },
    });

    res.json({
      message:
        "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getSalaryInsights = async (
  req,
  res
) => {
  try {
    const employees =
      await prisma.employee.findMany();

    const total =
      employees.reduce(
        (sum, emp) => sum + emp.salary,
        0
      );

    const avgSalary =
      employees.length > 0
        ? total / employees.length
        : 0;

    const maxSalary = Math.max(
      ...employees.map((e) => e.salary)
    );

    const minSalary = Math.min(
      ...employees.map((e) => e.salary)
    );

    res.json({
      totalEmployees:
        employees.length,
      averageSalary:
        avgSalary.toFixed(2),
      maxSalary,
      minSalary,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};