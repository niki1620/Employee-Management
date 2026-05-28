const prisma = require("../config/db");

exports.fetchEmployees = async () => {
  return prisma.employee.findMany();
};

exports.createEmployee = async (data) => {
  return prisma.employee.create({
    data,
  });
};