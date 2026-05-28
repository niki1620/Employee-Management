const prisma = require("../config/db");

exports.countryAnalytics = async () => {
  return prisma.employee.groupBy({
    by: ["country"],
    _avg: {
      salary: true,
    },
    _min: {
      salary: true,
    },
    _max: {
      salary: true,
    },
    _count: true,
  });
};